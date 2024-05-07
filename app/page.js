// Description: This file contains a simple example of how to use React.js in an application that uses Node.js and Express.js as its web framework.

import { Header } from "./header";
import {Tweet} from "react-tweet";

export default function Page(){
    return(
        <section>
            <Header>Heyooooo</Header>
            <p>This is the page content.</p>
            <Tweet id="1721221768013119762" />
        </section>
    )
}
