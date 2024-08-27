import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { JobPostListData } from "../../types/PostDataType";
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
  setVisibleJobPostsCounts?: React.Dispatch<React.SetStateAction<number>>;
  handlePaging?: () => void;
}

const JobPostMap = ({
  coordinates,
  jobPostData,
  setSortedJobPostData,
  handlePaging,
  setVisibleJobPostsCounts,
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
      const { postId, busplaName, latitude, longitude } = data;
      addMarker(map, postId, busplaName, latitude, longitude);
    });
  };

  const addMarker = (
    map: naver.maps.Map,
    postId: number,
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
        markerClickHandler(postId)
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
    if (setSortedJobPostData && setVisibleJobPostsCounts && handlePaging) {
      setSortedJobPostData(visibleJobPosts);
      setVisibleJobPostsCounts(visibleJobPosts.length);
      handlePaging();
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

  const markerClickHandler = (postId: number) => {
    const selectedJobPost = jobPostData.find(
      (jobPost) => jobPost.postId === postId
    );

    if (selectedJobPost) {
      navigate(`/job-post/${postId}`, { state: { jobPost: selectedJobPost } });
    }
  };

  const idleHandler = () => {
    updateMarkers();
  };

  return (
    <StyledMapContainer>
      <StyledMap id="map" ref={mapRef}></StyledMap>
    </StyledMapContainer>
  );
};

export default JobPostMap;

const StyledMapContainer = styled.div``;

const StyledMap = styled.div`
  width: 100%;
  height: 600px;
`;
