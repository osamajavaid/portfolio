import Badge from "../Badge"

const Tools = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Tools</span>
                <div className="flex flex-wrap gap-2">
                    <Badge title={"JavaScript"} />
                    <Badge title={"Nodejs"} />
                    <Badge title={"Expressjs"} />
                    <Badge title={"Nextjs"} />
                    <Badge title={"Reactjs"} />
                    <Badge title={"Postman"} />
                    <Badge title={"SwaggerAPI"} />
                    <Badge title={"GitHub"} />
                    <Badge title={"Material ui"} />
                    <Badge title={"Ant design"} />
                    <Badge title={"TailwindCSS"} />
                    <Badge title={"Bootstrap"} />
                    <Badge title={"Adobe Xd"} />
                    <Badge title={"Adobe illustrator"} />
                    <Badge title={"Figma"} />
                </div>
            </div>

        </div>
    )
}

export default Tools