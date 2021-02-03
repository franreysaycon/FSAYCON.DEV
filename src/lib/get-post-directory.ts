import { join } from "path"

const getPostDirectory = (): string => join(process.cwd(), 'src/content')

export default getPostDirectory
