import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "../menuItem/MenuItem";
import { selectDirectorySections } from "../../redux/selectors/directory";

import "./Directory.scss";

export default function Directory() {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
}
