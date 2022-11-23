const useDatetimeHelper = () => {
    var initialTime = new Date();
        const currentTime = ref(initialTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
        const currentDate = ref(initialTime.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }));

        setInterval(() => {
            var time = new Date();
            currentTime.value = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            currentDate.value = time.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' })
        }, 1000);

        return { currentDate, currentTime }
}


export default useDatetimeHelper;