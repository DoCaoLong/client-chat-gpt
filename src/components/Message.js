import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import "./Message.css";

function Message({ name, text }) {
    const isMe = name === "me";
    return (
        <div className={`message ${isMe && "message-user"}`}>
            <div
                style={
                    isMe ? { flexDirection: "row-reverse", gridGap: "5px" } : {}
                }
                className="message-inline"
            >
                <Avatar
                    className="message-avatar"
                    alt={isMe ? "Me" : "Anonymous"}
                    src={isMe ? null : "./avatar.png"}
                />
                <Card className={isMe ? "message-myCard" : "message-heraCard"}>
                    <CardContent className="message-cardContent">
                        <Typography
                            style={
                                isMe
                                    ? {
                                          color: "#fff",
                                      }
                                    : { color: "#000" }
                            }
                            className="message-typography"
                            color="black"
                            variant="h6"
                            component="h2"
                        >
                            {text}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Message;
