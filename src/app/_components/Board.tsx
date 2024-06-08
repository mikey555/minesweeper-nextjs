import Cell from "~/app/_components/Cell";

interface BoardProps {
    width: number,
    height: number,
    mines: number[]
}

export default function Board({width, height, mines}: BoardProps) {
    const rows = Array.from({length: height});
    const cols = Array.from({length: width});

    return (
        <div className="flex-col flex">
            {rows.map((_, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {cols.map((_, colIndex) => (
                        <Cell key={colIndex}/>
                    ))}
                </div>
            ))}
        </div>

    )


}

