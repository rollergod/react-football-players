import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={400}
        viewBox="0 0 300 390"
        backgroundColor="#f3f3f3"
        foregroundColor="#ffffff"
        {...props}
    >
        <rect x="17" y="10" rx="5" ry="5" width="300" height="320" />
    </ContentLoader>
)

export default Skeleton;

