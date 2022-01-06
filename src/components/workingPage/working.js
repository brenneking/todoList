import WorkingHeader from "./workingHeader";
import WorkingButtonComplete from "./workingButtonComplete";
import WorkingButtonStart from "./workingButtonStart";
import WorkingTimer from "./workingTimer";
import WorkingToDoList from "./workingToDoList";

function Working() {
    return (
        <div>
            <WorkingHeader />
            <WorkingToDoList />
            <WorkingButtonComplete />
            <WorkingButtonStart />
            <WorkingTimer />
        </div>
    );
}

export default Working;