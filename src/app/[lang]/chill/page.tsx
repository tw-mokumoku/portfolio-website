import { LangPromise } from "@/dictionaries/dictionaries";
import "./chill.css";

export default async function Page({params}:{params:LangPromise}) {
    const lang:string = (await params).lang;

    return (
        <div id="container">
            <div className="cursor-pointer relative box-sizing: content-box">
                <div
                    style={{ position: "absolute", width: "100vw", height: "100vh", top: "0px", left: "0px" }}
                >
                    <img
                        src="/cyber_city.gif"
                        alt=""
                        style={{width: "100%", height: "100%", objectFit: "cover", zIndex: "0", overflow: "clip", overflowClipMargin: "content-box"}}
                    />
                </div>
                <div id="crt-lines"/>
                <div id="darken" />
                <div id="vignette" />
            </div>
            <div id="ui-container">
                <div id="top-ui" className="w-full z-6 relative">
                </div>
                <div id="bottom-ui" className="w-full z-6 relative">
                    <div>
                        <span>press any key to start</span>
                    </div>
                </div>
            </div>
        </div>
    )
}