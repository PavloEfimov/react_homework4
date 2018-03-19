import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../Pages/About'
import Home from '../Pages/Home'
import Movies from '../Pages/Movies'

import './App1.css';


export default class App1 extends React.Component {

        state = {
            galleryItems: [],
            preferredItems: JSON.parse(localStorage.getItem('PrefInLS')) || []
        };

        componentWillMount() {

            fetch(
                    // `https://api.themoviedb.org/3/tv/popular?api_key=e963297109eef9fef9181b280d8fedda&language=en-US&page=1&include_adult=false&query={/\w/}`
                    // `https://api.themoviedb.org/3/search/movie?api_key=e963297109eef9fef918b280d8fedda&language=en-US&page=1&include_adult=false&query={/\w/}`
                    `https://api.themoviedb.org/3/movie/popular?api_key=e963297109eef9fef9181b280d8fedda&language=en-US&page=1`
                )
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error('Error while fetching ' + response.statusText);
                })
                .then(data => {
                        const movies = data.results.map(movie => ({
                            id: movie.id,
                            name: movie.title,
                            text: movie.overview,
                            rating: movie.popularity,
                            img: movie.poster_path,
                            date: movie.release_date
                        }));

                        return movies
                    }

                )
                .catch(err => console.error(err)).then(data => {
                    this.setState({
                        galleryItems: data
                    });
                });;

        }


        handleFormSubmit = query => {
            fetch(

                    `https://api.themoviedb.org/3/search/movie?api_key=e963297109eef9fef9181b280d8fedda&language=en-US&page=1&include_adult=false&query=${query}`
                )
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error('Error while fetching ' + response.statusText);
                })
                .then(data => {
                        const movies = data.results.map(movie => ({
                            id: movie.id,
                            name: movie.title,
                            text: movie.overview,
                            rating: movie.popularity,
                            img: movie.poster_path,
                            date: movie.release_date
                        }));

                        return movies
                    }

                )
                .catch(err => console.error(err)).then(data => {
                    this.setState({
                        galleryItems: data
                    });
                });
        };

        _handlePreferredItems = (_id) => {

            const __preferredItems = this.state.galleryItems.filter(n => n.id === _id)

            console.log('__preferredItems: ', __preferredItems[0].id)

            const isDouble = (el, idx, arr) => el[0].id !== __preferredItems[0].id;

            if (this.state.preferredItems.every(isDouble)) {

                this.setState({
                    preferredItems: [...this.state.preferredItems, __preferredItems]
                }, () => localStorage.setItem('PrefInLS', JSON.stringify(this.state.preferredItems)));



            } else { console.log('DOUBLE!!!') }
        }

        _deletePreferredItems = (_id) => {

            const __deletedItems = this.state.preferredItems.filter((n, idx) => n[0].id !== _id)
            this.setState({
                preferredItems: __deletedItems
            }, () => localStorage.setItem('PrefInLS', JSON.stringify(this.state.preferredItems)));
        }


        onPopular = () => {
            fetch(

                    // `https://api.themoviedb.org/3/tv/popular?api_key=e963297109eef9fef9181b280d8fedda&language=en-US&page=1`
                    `https://api.themoviedb.org/3/movie/popular?api_key=e963297109eef9fef9181b280d8fedda&language=en-US&page=1`
                )
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error('Error while fetching ' + response.statusText);
                })
                .then(data => {
                        const movies = data.results.map(movie => ({
                            id: movie.id,
                            name: movie.title,
                            text: movie.overview,
                            rating: movie.popularity,
                            img: movie.poster_path,
                            date: movie.release_date
                        }));

                        return movies
                    }

                )
                .catch(err => console.error(err)).then(data => {
                    this.setState({
                        galleryItems: data
                    });
                });
        };

        onTopRated = () => {
            fetch(

                    `https://api.themoviedb.org/3/movie/top_rated?api_key=e963297109eef9fef9181b280d8fedda&language=en-US&page=1`
                )
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error('Error while fetching ' + response.statusText);
                })
                .then(data => {
                        const movies = data.results.map(movie => ({
                            id: movie.id,
                            name: movie.title,
                            text: movie.overview,
                            rating: movie.popularity,
                            img: movie.poster_path,
                            date: movie.release_date
                        }));

                        return movies
                    }

                )
                .catch(err => console.error(err)).then(data => {
                    this.setState({
                        galleryItems: data
                    });
                });
        };

        onUpcoming = () => {
            fetch(

                    `https://api.themoviedb.org/3/movie/upcoming?api_key=e963297109eef9fef9181b280d8fedda&language=en-US&page=1`
                )
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error('Error while fetching ' + response.statusText);
                })
                .then(data => {
                        const movies = data.results.map(movie => ({
                            id: movie.id,
                            name: movie.title,
                            text: movie.overview,
                            rating: movie.popularity,
                            img: movie.poster_path,
                            date: movie.release_date
                        }));

                        return movies
                    }

                )
                .catch(err => console.error(err)).then(data => {
                    this.setState({
                        galleryItems: data
                    });
                });
        };

        render() {

            const { galleryItems, preferredItems } = this.state;

            return ( <
                div >

                <
                Header / >
                <
                Switch >
                <
                Route exact path = "/"
                component = { Home }
                />  <
                Route path = "/about"
                component = { About }
                /> 

                <
                Route path = "/movies"
                render = {
                    () => < Movies galleryItems = { galleryItems } preferredItems = { preferredItems } getImages = { this.handleFormSubmit } onPopular = { this.onPopular } onTopRated = { this.onTopRated } onUpcoming = { this.onUpcoming } deletePreferredItems = { this._deletePreferredItems } handlePreferredItems = { this._handlePreferredItems }
                    />}  / >

                    / >
                    <
                    /
                    Switch > < /
                    div >
                )

            }


        }