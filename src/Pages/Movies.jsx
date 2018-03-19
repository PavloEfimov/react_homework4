import React from 'react';
import CardList from '../CardList/CardList';
import PreferredCardList from '../PreferredCardList/PreferredCardList';
import SearchForm from '../SearchForm/SearchForm'


const Movies = ({galleryItems, preferredItems,getImages, onPopular, onTopRated, onUpcoming, deletePreferredItems, handlePreferredItems}) => {
  return (
    <div>

      <div className = 'mainBlock' >
            <div className = 'App__sidebar' > 
            <SearchForm getImages = { getImages }/ >    
            <div className = 'Buttons' >
            <button className = 'Popular'
            onClick = { onPopular } > Popular < /button> <
            button className = 'TopRated'
            onClick = { onTopRated } > Top Rated < /button> <
            button className = 'Upcoming'
            onClick = { onUpcoming } > Upcoming < /button> 
            < /div >

            <PreferredCardList preferredItems = { preferredItems } deletePreferredItems = { deletePreferredItems }
            / >  < /
            div > <
            CardList galleryItems = { galleryItems } handlePreferredItems = {handlePreferredItems }
            / > < /
            div >


    </div>
  );
};

export default Movies;