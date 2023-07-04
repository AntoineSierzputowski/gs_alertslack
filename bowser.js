window.sendExperimentData = (expId, varId, website, incremente) => {
    console.log('function sendExperimentData');
    setTimeout(() => {
        if (!window.elem_present) {
            console.log('elem_present false');
            const url = 'http://localhost:3000/experimentcheck';
            const data = {
                experiment: [expId, varId, website, incremente],
            };
            console.log('data: ', data);
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, 5000);
};

// Now you can call the function globally:
// window.sendExperimentData(34545, 87867, 'mywebsite.com', 1);
