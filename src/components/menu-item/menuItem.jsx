import React from "react";
import './menuItem.css';
import { useNavigate } from "react-router";

const MenuItem = ({ category }) => {
  const { title, imageUrl, routeName } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate("/shop/" + routeName);

  return (
    <div
      className='menu-item'
      onClick={onNavigateHandler}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
