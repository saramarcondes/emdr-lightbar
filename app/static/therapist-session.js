(function() {
    const socket = io();
	const lb = new Lightbar(document.getElementById('light-container'), false);
	const lbc = new TherapistLightbarController(
		lb,
        false,
        socket,
		document.querySelector('[name="light-width"]'),
		document.querySelector('[name="light-speed"]'),
		document.querySelector('[name="light-start"]'),
        document.getElementById('light-controls')
	);

    const ab = new Audiobar(document.getElementById('audio-container'), true);
    const abc = new TherapistAudiobarController(
        ab,
        true,
        socket,
        document.getElementById('audio-pitch-container'),
        document.querySelector('[name="audio-speed"]'),
        document.querySelector('[name="audio-start"]'),
        document.getElementById('audio-controls')
    );

    new TherapistMethodController(lbc, abc, window.initialSettings);
})();
