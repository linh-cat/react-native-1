import React from "react";
import { Image } from "react-native"

function HeaderLogo() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg' }}
        />
    );
}
export default HeaderLogo