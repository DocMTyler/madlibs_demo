import Card from './components/Card';
import LabeledInput from './components/LabeledInput';
import {useState} from 'react';
import Story from './components/Story';
import Button from './components/Button';

function App() {
  const[state, setState] = useState({
    character: "",
    setting: "",
    place: "",
    problem: "",
    adj1: "",
    adj2: "",
    action: "",
    result: ""
  });

  const [isVisible, setVisible] = useState(false);

  const stateSetter = (field, value) => {
    const newState = {...state};
    newState[field] = value;
    setState(newState);
  }

  const storySomethingElse = isVisible ? <Card title="The Mad Lib Story">
                              <Story contents={state}/>
                            </Card>
                            : "";
  
  return (
    <div>
      <Card title = "Fill out these fields">
      <LabeledInput label="Character" type="text" 
                                      value={state.character} 
                                      setValue={(value) => stateSetter("character", value)}
                                      />
      <LabeledInput label="Setting" type="text" value={state.setting}
                                                setValue={(value) => stateSetter("setting", value)}/>
      <LabeledInput label="Place to travel" type="text" value={state.place}
                                                setValue={(value) => stateSetter("place", value)}/>
      <LabeledInput label="Problem" type="text" value={state.problem}
                                                setValue={(value) => stateSetter("problem", value)}/>
      <LabeledInput label="Adjective" type="text" value={state.adj1}
                                                setValue={(value) => stateSetter("adj1", value)}/>
      <LabeledInput label="Adjective2" type="text" value={state.adj2}
                                                setValue={(value) => stateSetter("adj2", value)}/>
      <LabeledInput label="Action to Resolve problem" type="text" value={state.action}
                                                setValue={(value) => stateSetter("action", value)}/>
      <LabeledInput label="Result" type="text" value={state.result}
                                                setValue={(value) => stateSetter("result", value)}/>
      </Card>
      <Button label="Show the story!" action={()=> {setVisible(!isVisible)}}/>
      {storySomethingElse}
    </div>
  );
}

export default App;
