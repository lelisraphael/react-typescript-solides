import { useCallback, useState, useEffect } from "react";

function useLiFocus(size) {
    const [currentFocus, setCurrentFocus] = useState(0);

    const handleKeyDown = useCallback(
        e => {

            console.log('currentFocus' + currentFocus)
            console.log('size' + (size - 1))



            if (e.keyCode === 40) {
                // Down arrow
                e.preventDefault();
                setCurrentFocus(currentFocus === size ? 0 : currentFocus + 1);
            } else if (e.keyCode === 38) {
                // Up arrow
                e.preventDefault();
                setCurrentFocus(currentFocus === 0 ? size : currentFocus - 1);
            }
        }, [size, currentFocus, setCurrentFocus]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown, false);
        return () => {
            document.removeEventListener("keydown", handleKeyDown, false);
        };
    }, [handleKeyDown]);

    return [currentFocus, setCurrentFocus];
}

export default useLiFocus;