const goBack = (): void => {
    if(typeof window !== "undefined"){
        window.history.back()
    }
}

export default goBack
