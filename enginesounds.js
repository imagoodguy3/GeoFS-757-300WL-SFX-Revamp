
geofs.aircraft.instance.definition.sounds[0].effects.volume.value = "rpm";
geofs.aircraft.instance.definition.sounds[0].effects.pitch.value = "rpm";
geofs.aircraft.instance.definition.sounds[0].file = "https://imagoodguy3.github.io/GeoFS-757-300WL-SFX-Revamp/low.mp3";

geofs.aircraft.instance.definition.sounds[1].effects.volume.value = "rpm";
geofs.aircraft.instance.definition.sounds[1].effects.pitch.value = "rpm";
geofs.aircraft.instance.definition.sounds[1].file = "https://imagoodguy3.github.io/GeoFS-757-300WL-SFX-Revamp/low.mp3";

geofs.aircraft.instance.definition.sounds[2].effects.volume.value = "rpm";
geofs.aircraft.instance.definition.sounds[2].effects.pitch.value = "rpm";
geofs.aircraft.instance.definition.sounds[2].file = "https://imagoodguy3.github.io/GeoFS-757-300WL-SFX-Revamp/low.mp3";

geofs.aircraft.instance.definition.sounds[5].file = "https://imagoodguy3.github.io/GeoFS-757-300WL-SFX-Revamp/startup.mp3";

// Low layer
geofs.aircraft.instance.definition.sounds[7] = {};
geofs.aircraft.instance.definition.sounds[7].id = "rpm4";
geofs.aircraft.instance.definition.sounds[7].file = "https://imagoodguy3.github.io/GeoFS-757-300WL-SFX-Revamp/low.mp3";
geofs.aircraft.instance.definition.sounds[7].effects = { 
    volume: { value: "rpm", ramp: [0, 5000, 9000, 12000], ratio: 1 }, 
    pitch: { value: "rpm", ramp: [0, 20000, 20000, 20000], offset: 1, ratio: 1 } 
};

// Mid layer
geofs.aircraft.instance.definition.sounds[8] = {};
geofs.aircraft.instance.definition.sounds[8].id = "rpm5";
geofs.aircraft.instance.definition.sounds[8].file = "https://imagoodguy3.github.io/GeoFS-757-300WL-SFX-Revamp/mid.mp3";
geofs.aircraft.instance.definition.sounds[8].effects = { 
    volume: { value: "rpm", ramp: [9000, 12000, 15000, 18000], ratio: 1 }, 
    pitch: { value: "rpm", ramp: [0, 20000, 20000, 20000], offset: 1, ratio: 1 } 
};

// High layer
geofs.aircraft.instance.definition.sounds[9] = {};
geofs.aircraft.instance.definition.sounds[9].id = "rpm6";
geofs.aircraft.instance.definition.sounds[9].file = "https://imagoodguy3.github.io/GeoFS-757-300WL-SFX-Revamp/high.mp3";
geofs.aircraft.instance.definition.sounds[9].effects = { 
    volume: { value: "rpm", ramp: [8000, 18000, 20000, 20000], ratio: 2 }, // high dominates
    pitch: { value: "rpm", ramp: [0, 0, 0, 0], offset: 1, ratio: 1 } // no pitch change
};


audio.init(geofs.aircraft.instance.definition.sounds);


[0,1,2,7,8,9].forEach(i => {
    geofs.aircraft.instance.definition.sounds[i].effects.volume.ratio = 100;
});
