import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Refresh from "../../asset/Refresh.svg";
import { JobPostListData } from "../../types/JobPostDataType";
import CustomMapMarker from "./CustomMapMarker";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface JobPostMapType {
  coordinates: Coordinates;
  jobPostData: JobPostListData[];
  setSortedJobPostData?: React.Dispatch<
    React.SetStateAction<JobPostListData[]>
  >;
}

const JobPostMap = ({
  coordinates,
  jobPostData,
  setSortedJobPostData,
}: JobPostMapType) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const { naver } = window;
  let map: naver.maps.Map;
  const [newMap, setNewMap] = useState<naver.maps.Map | null>(null);
  const markerListRef = useRef<naver.maps.Marker[]>([]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !naver) {
      console.error("Naver Maps API is not loaded.");
      return;
    }

    const center = new window.naver.maps.LatLng(
      coordinates.latitude,
      coordinates.longitude
    );

    //지도 옵션 설정
    const mapOptions: naver.maps.MapOptions = {
      center: center,
      zoom: 12,
      minZoom: 11,
      maxZoom: 19,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      mapDataControl: false,
      scaleControl: false,
    };

    map = new window.naver.maps.Map(mapRef.current, mapOptions);
    setNewMap(map);
    addMarkers(map);
  }, [coordinates, jobPostData, viewportWidth]);

  useEffect(() => {
    if (newMap) {
      const MoveEventListner = naver.maps.Event.addListener(
        newMap,
        "idle",
        idleHandler
      );
      return () => {
        naver.maps.Event.removeListener(MoveEventListner);
      };
    }
  }, [newMap]);

  const addMarkers = (map: naver.maps.Map) => {
    // 기존 마커를 제거하고 리스트 초기화
    markerListRef.current.forEach((marker) => marker.setMap(null));
    markerListRef.current = [];

    jobPostData.forEach((data) => {
      const { id, busplaName, latitude, longitude } = data;
      addMarker(map, id, busplaName, latitude, longitude);
    });
  };

  const addMarker = (
    map: naver.maps.Map,
    id: string,
    title: string,
    lat: number,
    lng: number
  ) => {
    try {
      const newMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map: map,
        title: title,
        clickable: true,
        icon: {
          //html element를 반환하는 CustomMapMarker 컴포넌트 할당
          content: CustomMapMarker({
            title: title,
            windowWidth: viewportWidth,
          }),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });
      newMarker.setTitle(title);
      markerListRef.current.push(newMarker);

      naver.maps.Event.addListener(newMarker, "click", () =>
        markerClickHandler(id)
      );
    } catch (e) {
      console.error(e);
    }
  };

  const updateMarkers = () => {
    const map = newMap;
    const markers = markerListRef.current;

    if (!map) return;

    const mapBounds = map.getBounds();
    let visibleJobPosts: JobPostListData[] = [];

    // let marker: naver.maps.Marker, position;

    for (let i = 0; i < markers.length; i++) {
      const marker = markers[i];
      const position = marker.getPosition();

      if (mapBounds.hasPoint(position)) {
        showMarker(map, marker);

        const jobPost = jobPostData.find(
          (post) =>
            post.latitude === position.y && post.longitude === position.x
        );
        if (jobPost) visibleJobPosts.push(jobPost);
      } else {
        hideMarker(marker);
      }
    }
    if (setSortedJobPostData) {
      setSortedJobPostData(visibleJobPosts);
    }
  };

  const showMarker = (map: naver.maps.Map, marker: naver.maps.Marker) => {
    if (marker.getMap()) return;
    marker.setMap(map);
  };

  const hideMarker = (marker: naver.maps.Marker) => {
    if (!marker.getMap()) return;
    marker.setMap(null);
  };

  const markerClickHandler = (id: string) => {
    const selectedJobPost = jobPostData.find((jobPost) => jobPost.id === id);

    if (selectedJobPost) {
      navigate(`/job-post/${id}`, { state: { jobPost: selectedJobPost } });
    }
  };

  const idleHandler = () => {
    updateMarkers();
  };

  return (
    <StyledMapContainer>
      <StyledMap id="map" ref={mapRef}></StyledMap>
      <StyledButton onClick={() => console.log("reset btn")}>
        <StyledButtonIcon>
          <img src={Refresh} alt="" />
        </StyledButtonIcon>
        <StyledButtonContent>현 위치에서 검색</StyledButtonContent>
      </StyledButton>
    </StyledMapContainer>
  );
};

export default JobPostMap;

const StyledMapContainer = styled.div`
  position: relative;
`;

const StyledMap = styled.div`
  width: 100%;
  height: 600px;
  margin: 0 auto;
`;

const StyledButton = styled.div`
  width: 180px;
  height: 40px;
  position: absolute;
  display: table;
  padding: 0.5rem 0.2rem;
  table-layout: auto;
  border-radius: 2.3rem;
  background-color: #fff;
  border: 2px solid #224a99;
  z-index: 10;
  bottom: 24px;
  border-bottom-width: 2px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  // @media (min-width: 768px) {
  //   padding: 1rem 0.8rem;
  //   bottom: 4rem;
  // }
`;

const StyledButtonIcon = styled.div`
  display: table-cell;
  display: inline-block;
  width: 2rem;
  height: 2em;
  margin-left: 1.5rem;
  margint-right: 1.5rem;
  padding-top: 0.3rem;
  // @media (min-width: 768px) {
  //   width: 2.7rem;
  //   height: 2.7rem;
  //   padding-top: 0.2rem;
  // }
`;

const StyledButtonContent = styled.div`
  max-width: 17rem;
  padding: 0 2rem 0 0rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: table-cell;
  vertical-align: middle;
  cursor: pointer;
  font-family: Roboto;
  color: #224a99;
  font-size: 16px;
  letter-spacing: -0.04rem;
  font-weight: 600;
  line-height: 2rem;
  // @media (min-width: 768px) {
  //   height: 3rem;
  //   font-size: 16px;
  //   line-height: 3rem;
  // }
`;
