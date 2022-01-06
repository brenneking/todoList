import IndexButtons from "./indexButtons"
import IndexHeader from "./indexHeader"
import IndexToDoList from "./indexToDoList"


function Home() {
    return (
        <div>
            <IndexHeader />
            <IndexToDoList />
            <IndexButtons />
        </div>
    )
}