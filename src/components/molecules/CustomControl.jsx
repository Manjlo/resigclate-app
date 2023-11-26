import { useEffect, useRef, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import ReactDOM from "react-dom";

const CustomControl = L.Control.extend({
  initialize: function (options) {
    L.Util.setOptions(this, options);
  },
  onAdd: function () {
    this._div = L.DomUtil.create("div", this.options.className);
    return this._div;
  },
});

const MyCustomControl = ({ children, className }) => {
  const map = useMap();
  const controlRef = useRef(null);
  const [div, setDiv] = useState(null);

  useEffect(() => {
    controlRef.current = new CustomControl({ className }).addTo(map);
    setDiv(controlRef.current.getContainer());
    return () => {
      map.removeControl(controlRef.current);
    };
  }, [map, className]);

  return div ? ReactDOM.createPortal(children, div) : null;
};

export default MyCustomControl;
