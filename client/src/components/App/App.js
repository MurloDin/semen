import React from "react";
import { Switch, Route } from 'react-router-dom'

import "./App.scss";
import "../../styles/fontello/css/fontello.css";

import Header from "../Header";
import PreviewSection from "../sections/PreviewSections";
import StorySection from "../sections/StorySection";
import JourneySection from "../sections/JourneySection";
import TeamSection from "../sections/TeamSection";
import CommentsSection from "../sections/CommentsSection";
import ParallaxSection from "../sections/ParallaxSection";
import ContactsSection from "../sections/ContactsSection/ContactsSection";
import CommentForm from "../CommentForm";


const App = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Header />
                <PreviewSection />
                <StorySection />
                <JourneySection />
                <TeamSection />
                <CommentsSection />
                <ParallaxSection />
                <ContactsSection />
            </Route>
            <Route path="/new-comment" component={CommentForm} />
        </Switch>
    );
};


export default App;
