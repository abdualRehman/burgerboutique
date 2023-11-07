import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationItem from "./LocationItem";

export default function LocationMenu() {
  const locationList = [
    { name: "Ahmadi", locations: ["Fintas"] },
    { name: "Mubarak Al-Kabeer", locations: ["Al-Adan", "Wista"] },
    {
      name: "Hawalli",
      locations: [
        "Bayan",
        "Jabriya",
        "Maidan Hawally",
        "Mishref",
        "Mubarak Al-Abdullah (West Mishref)",
        "Rumaithiya",
        "Salam",
        "Salmiya",
        "Salwa",
      ],
    },
    {
      name: "Kuwait City",
      locations: [
        "Al Nahda",
        "Bneid Al Qar",
        "Daiya",
        "Dasma",
        "Faiha",
        "Jibla",
        "Kaifan",
        "Khaldiya",
        "Kuwait City",
        "Mansouriya",
        "Mirgab",
        "Mubarakiya",
        "Nuzha",
        "Qadsiya",
        "Qibla",
        "Qortuba",
        "Rawda",
        "Salhiya",
        "Sawabir",
        "Shamiya",
        "Sharq",
        "Surra",
        "Yarmouk",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {locationList.map((item) => (
        <LocationItem
          locations={item.locations}
          name={item.name}
          key={item.name}
        />
      ))}
    </div>
  );
}
