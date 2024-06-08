'use client'

import Board from "~/app/_components/Board";

export default function GameManager() {

    return <Board width={10} height={10} mines={[5]} />;
}