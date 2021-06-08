import React, { PureComponent } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import styled from "styled-components";

const MapStyled = styled.div`
  width: 100%;
  margin: auto;

  .marker {
    width: 0;
    height: 0;
  }

  .marker span {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 4rem;
    height: 4rem;
    color: white;
    background: transparent url("https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png")
      no-repeat center;
    background-size: contain;
    cursor: pointer;
    position: relative;
  }
  .mapboxgl-popup {
    width: 27rem;
    p {
      font-size: 1.4rem;
    }
  }
`;

const mapStyle = {
  width: "100%",
  height: 500,
};

const CustomMarker = ({ index, marker, openPopup }) => {
  return (
    <Marker longitude={marker.longitude} latitude={marker.latitude}>
      <div className="marker" onClick={() => openPopup(index)}>
        <span/>
      </div>
    </Marker>
  );
};

const CustomPopup = ({ index, marker, closePopup }) => {
  return (
    <Popup
      latitude={marker.latitude}
      longitude={marker.longitude}
      onClose={closePopup}
      closeButton={true}
      closeOnClick={false}
      offsetTop={-30}
    >
      <h6>{marker.name}</h6>
      <p>{marker.address}</p>
    </Popup>
  );
};

const mapboxApiKey =
  "pk.eyJ1IjoibmhpZGV2IiwiYSI6ImNrbzc3MTNlejBtNzcydnBkaDR3eDI2aW8ifQ.axNab4PgM_tBy7hngQoCIg";

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        longitude: 106.71806,
        latitude: 10.79361,
        zoom: 15,
      },
      selectedIndex: null,
      tempMarker: {
        name: "Dan Poledance Studio",
        address: "Floor 2, 179B Nguyen Huu Canh Street, Ward 22",
        longitude: 106.71806,
        latitude: 10.79361,
      },
      markers: [
        {
          name: "Dan Poledance Studio",
          address: "Floor 2, 179B Nguyen Huu Canh Street, Ward 22",
          longitude: 106.71806,
          latitude: 10.79361,
        },
      ],
    };
  }

  setSelectedMarker = (index) => {
    this.setState({ selectedIndex: index });
  };

  closePopup = () => {
    this.setSelectedMarker(null);
  };

  openPopup = (index) => {
    this.setSelectedMarker(index);
  };

  render() {
    const { viewport, tempMarker, selectedIndex, markers } = this.state;
    const { className } = this.props;
    return (
      <MapStyled className={className}>
        <ReactMapGL
          mapboxApiAccessToken={mapboxApiKey}
          mapStyle="mapbox://styles/mapbox/light-v10"
          {...viewport}
          {...mapStyle}
          onViewportChange={(viewport) => this.setState({ viewport })}
          scrollZoom={false}
        >
          <Marker
            longitude={tempMarker.longitude}
            latitude={tempMarker.latitude}
          >
            <div className="marker temporary-marker">
              <span></span>
            </div>
          </Marker>
          {this.state.markers.map((marker, index) => {
            return (
              <CustomMarker
                key={`marker-${index}`}
                index={index}
                marker={marker}
                openPopup={this.openPopup}
              />
            );
          })}
          {selectedIndex !== null && (
            <CustomPopup
              index={selectedIndex}
              marker={markers[selectedIndex]}
              closePopup={this.closePopup}
            />
          )}
        </ReactMapGL>
      </MapStyled>
    );
  }
}

export default Map;
