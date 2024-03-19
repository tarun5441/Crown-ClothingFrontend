import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './Collection.css';
import { useParams } from 'react-router';
import { fetchCategoryData } from '../../redux/category/action';
const Collection = () => {
  const { collection } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.categoryReducer);

  useEffect(() => {
    dispatch(fetchCategoryData());
  }, [dispatch]);

  const title = collection.toUpperCase();
  // console.log(title);
  const categoryData = data.find(category => category.title.toUpperCase() === title);
  const items = categoryData ? categoryData.items : [];
  // console.log(itemns)

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="items">
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
