import React, { useEffect, useState } from "react";
import API from "../utils/API";
// import { Col, Row, Container } from "../components/Grid";
import PropertyDetail from "../components/PropertyDetail";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { setFavorite, removeFavorite } from "../redux/auth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 450,
        backgroundColor: "#312450",
        color: "white",
        size: 10,
        fontFamily: "",
    },
    media: {
        height: 140,
        color: "white",
    },
    favoriteIcon: {
        alignItems: "right",
        cursor: "pointer",
        color: "white",
    },
    Button: {
        color: "white",
    },
    propertyDetails: {
        marging: 0,
    },
}));
function MyListings() {
    const classes = useStyles();
    // Setting our component's initial state
    const [properties, setProperties] = useState([]);
    const dispatch = useDispatch();
    // Load all properties and store them with setProperties
    useEffect(() => {
        loadProperties();
    }, []);
    // Loads all properties and sets them to properties
    function loadProperties() {
        API.getMyPropertyList()
            .then((res) => {
                console.log({ res });
                setProperties(res.data);
            })
            .catch((err) => console.log(err));
    }
    const handleBtnClick = (property) => {
        // API to save the favorite property to the database
        API.deleteProperty(property.listing_id).then((result) => {
            const updateList = properties.filter(
                (value) => value.listing_id !== property.listing_id
            );
            setProperties(updateList);
            dispatch(removeFavorite(property.listing_id));
        });
    };
    return (
        <Container align="center" maxWidth={false}>
            <section className="display">
                <h1>My Listing</h1>
                <Grid container spacing={3}>
                    {properties.map((property, index) => (
                        <Grid key={index} item xs={12} md={6} lg={3}>
                            <PropertyDetail
                                property={property}
                                onClick={() => handleBtnClick(property)}
                                onListing={true}
                            />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </Container>
    );
}
export default MyListings;