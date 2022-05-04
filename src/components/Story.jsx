function Story({contents}){
    const story = contents;
    return(
        <div>
                <p>{story.character} was walking along one day in {story.setting}. {story.character} was
                a world traveler, so he wanted to go to {story.place}. However, {story.character} wasn't able to
                because {story.character} {story.problem}. {story.character} was very {story.adj1} and {story.adj2}. 
                So {story.character} {story.action}, and interestingly {story.result}.
                </p>
        </div>
    );
}

export default Story;