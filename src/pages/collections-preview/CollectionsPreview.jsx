import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionPreview from '../../components/collection-preview/CollectionPreview'
import './CollectionsPreview.css'; // Assuming you have a CSS file for styling

const CollectionsPreview = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.categoryReducer);

  useEffect(() => {
    // Dispatch an action to fetch category data when the component mounts
    // You can dispatch an action here if needed
  }, [dispatch]);

  return (
    <div className="collection-overview">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        data.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))
      )}
    </div>
  );
}

export default CollectionsPreview;
