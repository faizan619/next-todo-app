import Button from "../component/Button";

export default function Page(){
    return(
        <div className="min-h-screen flex flex-col justify-center gap-5 items-center">
            <Button title="Task Api" url="/api/tasks" />
            <Button title="User Api" url="/api/users" />
        </div>
    )
}