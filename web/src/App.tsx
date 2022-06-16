import { Widget } from "./components/Widget"

export function App() {
  return (
    <>
      <div className="h-24 px-10 bg-zinc-900 flex items-center justify-between">
        <div className="bg-zinc-700 h-12 w-36 rounded-lg blur-sm"></div>
        <div className="flex items-center">
          <div className="bg-zinc-700 mx-4 h-6 w-32 rounded-lg blur-sm"></div>
          <div className="bg-zinc-700 mx-4 h-6 w-32 rounded-lg blur-sm"></div>
          <div className="bg-zinc-700 mx-4 h-6 w-32 rounded-lg blur-sm"></div>
          <div className="bg-zinc-700 mx-4 h-12 w-12 rounded-full blur-sm"></div>
        </div>
      </div>
      <Widget/>
    </>
  )
}

