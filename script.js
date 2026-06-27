        function info(h3, h5, button) {
            document.querySelector(".mid").innerHTML += `<div class="info">
                    <h3>${h3}</h3>
                    <h5>${h5}</h5>
                    <button>${button}</button>
                </div>`
        }
        info("Create your first playlist", "It's easy, we will help you!", "Create Playlist")
        info("Let's find some podcasts to follow", "We'll keep you updated on new episodes", "Browse podcasts")

        // ==========================================
        // DYNAMIC LIBRARY SYSTEM
        // ==========================================
        let library = [
            {
                title: "After Dark", artist: "MrKitty",
                cover: "songs/After Dark  MrKitty/Mr.Kitty - After Dark.webp",
                audioUrl: "songs/After Dark  MrKitty/Mr.Kitty - After Dark.mp3"
            },
            {
                title: "After Hours", artist: "The Weeknd",
                cover: "songs/After Hours  The Weeknd/The Weeknd - After Hours (Audio).webp",
                audioUrl: "songs/After Hours  The Weeknd/The Weeknd - After Hours (Audio).mp3"
            },
            {
                title: "Aisay Kaisay", artist: "Hasan Raheem",
                cover: "songs/Aisay Kaisay  Hasan Raheem/Hasan Raheem - Aisay Kaisay ft Abdullah Kasumbi.webp",
                audioUrl: "songs/Aisay Kaisay  Hasan Raheem/Hasan Raheem - Aisay Kaisay ft Abdullah Kasumbi.mp3"
            },
            {
                title: "Apocalypse", artist: "Cigarettes After Sex",
                cover: "songs/Apocalypse  Cigarettes After Sex/Apocalypse - Cigarettes After Sex.webp",
                audioUrl: "songs/Apocalypse  Cigarettes After Sex/Apocalypse - Cigarettes After Sex.mp3"
            },
            {
                title: "Asal Mein", artist: "Darshan Raval",
                cover: "songs/Asal Mein  Darshan Raval/Asal Mein - Darshan Raval ｜ Official Lyrical Video ｜ Indie Music Label.webp",
                audioUrl: "songs/Asal Mein  Darshan Raval/Asal Mein - Darshan Raval ｜ Official Lyrical Video ｜ Indie Music Label.mp3"
            },
            {
                title: "Atlantis", artist: "Seafret",
                cover: "songs/Atlantis  Seafret/Seafret - Atlantis (Audio).jpg",
                audioUrl: "songs/Atlantis  Seafret/Seafret - Atlantis (Audio).mp3"
            },
            {
                title: "Chemtrails Over the Country Club", artist: "Lana Del Rey",
                cover: "songs/Chemtrails Over the Country Club  Lana Del Rey/Lana Del Rey - Chemtrails Over The Country Club.webp",
                audioUrl: "songs/Chemtrails Over the Country Club  Lana Del Rey/Lana Del Rey - Chemtrails Over The Country Club.mp3"
            },
            {
                title: "Cry", artist: "Cigarettes After Sex",
                cover: "songs/Cry  Cigarettes After Sex/Cry - Cigarettes After Sex.webp",
                audioUrl: "songs/Cry  Cigarettes After Sex/Cry - Cigarettes After Sex.mp3"
            },
            {
                title: "Daraaz Mein", artist: "Arpit Bala",
                cover: "songs/Daraaz Mein  Arpit Bala/sufr ft Arpit Bala, toorjo dey - bargad (official lyric video).webp",
                audioUrl: "songs/Daraaz Mein  Arpit Bala/sufr ft Arpit Bala, toorjo dey - bargad (official lyric video).mp3"
            },
            {
                title: "Daylight", artist: "David Kushner",
                cover: "songs/Daylight  David Kushner/David Kushner - Daylight (Lyric Video) (Official).webp",
                audioUrl: "songs/Daylight  David Kushner/David Kushner - Daylight (Lyric Video) (Official).mp3"
            },
            {
                title: "Death Bed", artist: "Powfu",
                cover: "songs/Death Bed Coffee for Your Head  Powfu ft beabadoobee/Powfu - death bed (coffee for your head) (Official Video) ft. beabadoobee.webp",
                audioUrl: "songs/Death Bed Coffee for Your Head  Powfu ft beabadoobee/Powfu - death bed (coffee for your head) (Official Video) ft. beabadoobee.mp3"
            },
            {
                title: "Die For You", artist: "Joji",
                cover: "songs/Die For You  Joji/Joji - Die For You.webp",
                audioUrl: "songs/Die For You  Joji/Joji - Die For You.mp3"
            },
            {
                title: "Die For You", artist: "The Weeknd",
                cover: "songs/Die For You  The Weeknd/The Weeknd - Die For You (Audio).webp",
                audioUrl: "songs/Die For You  The Weeknd/The Weeknd - Die For You (Audio).mp3"
            },
            {
                title: "Dooba", artist: "Nanku",
                cover: "songs/Dooba  Nanku/Dooba ｜ Karun, Nanku ｜ Social, Nehru Place.webp",
                audioUrl: "songs/Dooba  Nanku/Dooba ｜ Karun, Nanku ｜ Social, Nehru Place.mp3"
            },
            {
                title: "Downers at Dusk", artist: "Talha Anjum",
                cover: "songs/Downers at Dusk  Talha Anjum/Talha Anjum - Downers At Dusk ｜ Prod. by Umair (Official Audio).webp",
                audioUrl: "songs/Downers at Dusk  Talha Anjum/Talha Anjum - Downers At Dusk ｜ Prod. by Umair (Official Audio).mp3"
            },
            {
                title: "Ghar", artist: "Bharat Chauhan",
                cover: "songs/Ghar  Bharat Chauhan/Bharat Chauhan - Ghar [Official Music Video].webp",
                audioUrl: "songs/Ghar  Bharat Chauhan/Bharat Chauhan - Ghar [Official Music Video].mp3"
            },
            {
                title: "Glimpse of Us", artist: "Joji",
                cover: "songs/Glimpse of Us  Joji/Joji -  Glimpse of Us.webp",
                audioUrl: "songs/Glimpse of Us  Joji/Joji -  Glimpse of Us.mp3"
            },
            {
                title: "Gumaan", artist: "Young Stunners",
                cover: "songs/Gumaan  Talha Anjum Talhah Yunus  Jokhay/GUMAAN - Young Stunners ｜ Talha Anjum ｜ Talhah Yunus ｜ Prod. By Jokhay (Official Music Video).webp",
                audioUrl: "songs/Gumaan  Talha Anjum Talhah Yunus  Jokhay/GUMAAN - Young Stunners ｜ Talha Anjum ｜ Talhah Yunus ｜ Prod. By Jokhay (Official Music Video).mp3"
            },
            {
                title: "Haarey", artist: "Abdul Hannan",
                cover: "songs/Haarey  Abdul Hannan/Abdul Hannan - Haaray ｜ Prod by Shahmeer Raza Khan (Official Music Video).webp",
                audioUrl: "songs/Haarey  Abdul Hannan/Abdul Hannan - Haaray ｜ Prod by Shahmeer Raza Khan (Official Music Video).mp3"
            },
            {
                title: "Halleys Comet", artist: "Billie Eilish",
                cover: "songs/Halleys Comet  Billie Eilish/Billie Eilish - Halley’s Comet (Official Lyric Video).webp",
                audioUrl: "songs/Halleys Comet  Billie Eilish/Billie Eilish - Halley’s Comet (Official Lyric Video).mp3"
            },
            {
                title: "Happier", artist: "Ed Sheeran",
                cover: "songs/Happier  Ed Sheeran/Ed Sheeran - Happier [Official Audio].webp",
                audioUrl: "songs/Happier  Ed Sheeran/Ed Sheeran - Happier [Official Audio].mp3"
            },
            {
                title: "Haseen", artist: "Talwiinder",
                cover: "songs/Haseen  Talwiinder/HASEEN - TALWIINDER, NDS, RIPPY (Official Visualizer).webp",
                audioUrl: "songs/Haseen  Talwiinder/HASEEN - TALWIINDER, NDS, RIPPY (Official Visualizer).mp3"
            },
            {
                title: "Heartbreak Kid", artist: "Talha Anjum",
                cover: "songs/Heartbreak Kid  Talha Anjum/Talha Anjum - Heartbreak Kid ｜ Prod. by Umair (Official Audio).webp",
                audioUrl: "songs/Heartbreak Kid  Talha Anjum/Talha Anjum - Heartbreak Kid ｜ Prod. by Umair (Official Audio).mp3"
            },
            {
                title: "I Love You So", artist: "The Walters",
                cover: "songs/I Love You So  The Walters/The Walters -- I Love You So.webp",
                audioUrl: "songs/I Love You So  The Walters/The Walters -- I Love You So.mp3"
            },
            {
                title: "If the World Was Ending", artist: "JP Saxe",
                cover: "songs/If the World Was Ending  JP Saxe ft Julia Michaels/JP Saxe - If The World Was Ending (Lyric Video) ft. Julia Michaels.webp",
                audioUrl: "songs/If the World Was Ending  JP Saxe ft Julia Michaels/JP Saxe - If The World Was Ending (Lyric Video) ft. Julia Michaels.mp3"
            },
            {
                title: "Iraaday", artist: "Abdul Hannan",
                cover: "songs/Iraaday  Abdul Hannan  Rovalio/Abdul Hannan & Rovalio - Iraaday (Official Music Video).webp",
                audioUrl: "songs/Iraaday  Abdul Hannan  Rovalio/Abdul Hannan & Rovalio - Iraaday (Official Music Video).mp3"
            },
            {
                title: "Iss Tarah", artist: "Chaar Diwaari",
                cover: "songs/Iss Tarah  Chaar Diwaari ft Sonu Nigam/Chaar Diwaari ft. Sonu Nigam - Iss Tarah ｜ Parvana EP ｜ Def Jam India.webp",
                audioUrl: "songs/Iss Tarah  Chaar Diwaari ft Sonu Nigam/Chaar Diwaari ft. Sonu Nigam - Iss Tarah ｜ Parvana EP ｜ Def Jam India.mp3"
            },
            {
                title: "Jigar", artist: "Natkhat",
                cover: "songs/Jigar  Natkhat/Natkhat - Jigar (Music Video).webp",
                audioUrl: "songs/Jigar  Natkhat/Natkhat - Jigar (Music Video).mp3"
            },
            {
                title: "K", artist: "Cigarettes After Sex",
                cover: "songs/K  Cigarettes After Sex/K. - Cigarettes After Sex.webp",
                audioUrl: "songs/K  Cigarettes After Sex/K. - Cigarettes After Sex.mp3"
            },
            {
                title: "Kaafi Jyada", artist: "Nanku",
                cover: "songs/Kaafi Jyada  Nanku/Nanku - Kaafizyada [Music Video] ｜ Nanku Sharma.webp",
                audioUrl: "songs/Kaafi Jyada  Nanku/Nanku - Kaafizyada [Music Video] ｜ Nanku Sharma.mp3"
            },
            {
                title: "Khat", artist: "Prateek Kuhad",
                cover: "songs/Khat  Prateek Kuhad/Prateek Kuhad - Co2 (Official Audio).webp",
                audioUrl: "songs/Khat  Prateek Kuhad/Prateek Kuhad - Co2 (Official Audio).mp3"
            },
            {
                title: "Like You Do", artist: "Joji",
                cover: "songs/Like You Do  Joji/Joji - Like You Do (Official Audio).webp",
                audioUrl: "songs/Like You Do  Joji/Joji - Like You Do (Official Audio).mp3"
            },
            {
                title: "Love Lost", artist: "Talha Anjum",
                cover: "songs/Love Lost  Talha Anjum/Umair, Talha Anjum - love lost (Official Audio).webp",
                audioUrl: "songs/Love Lost  Talha Anjum/Umair, Talha Anjum - love lost (Official Audio).mp3"
            },
            {
                title: "Mystery of Love", artist: "Sufjan Stevens",
                cover: "songs/Mystery of Love  Sufjan Stevens/Mystery of Love (From the Original Motion Picture “Call Me by Your Name”).webp",
                audioUrl: "songs/Mystery of Love  Sufjan Stevens/Mystery of Love (From the Original Motion Picture “Call Me by Your Name”).mp3"
            },
            {
                title: "No Surprises", artist: "Radiohead",
                cover: "songs/No Surprises  Radiohead/No Surprises.webp",
                audioUrl: "songs/No Surprises  Radiohead/No Surprises.mp3"
            },
            {
                title: "Obvious", artist: "Hasan Raheem",
                cover: "songs/Obvious  Hasan Raheem/Umair, Hasan Raheem - OBVIOUS (Official Audio).webp",
                audioUrl: "songs/Obvious  Hasan Raheem/Umair, Hasan Raheem - OBVIOUS (Official Audio).mp3"
            },
            {
                title: "Ocean Eyes", artist: "Billie Eilish",
                cover: "songs/Ocean Eyes  Billie Eilish/Billie Eilish - Ocean Eyes (Official Audio) - Lyrics In Description.webp",
                audioUrl: "songs/Ocean Eyes  Billie Eilish/Billie Eilish - Ocean Eyes (Official Audio) - Lyrics In Description.mp3"
            },
            {
                title: "Orange Juice", artist: "Noah Kahan",
                cover: "songs/Orange Juice  Noah Kahan/Noah Kahan - Orange Juice (Official Lyric Video).webp",
                audioUrl: "songs/Orange Juice  Noah Kahan/Noah Kahan - Orange Juice (Official Lyric Video).mp3"
            },
            {
                title: "Photograph", artist: "Ed Sheeran",
                cover: "songs/Photograph  Ed Sheeran/Ed Sheeran - Photograph (Official Lyric Video).webp",
                audioUrl: "songs/Photograph  Ed Sheeran/Ed Sheeran - Photograph (Official Lyric Video).mp3"
            },
            {
                title: "Sailor Song", artist: "Gigi Perez",
                cover: "songs/Sailor Song  Gigi Perez/Gigi Perez - Sailor Song [Official Audio].webp",
                audioUrl: "songs/Sailor Song  Gigi Perez/Gigi Perez - Sailor Song [Official Audio].mp3"
            },
            {
                title: "Save Your Tears", artist: "The Weeknd",
                cover: "songs/Save Your Tears  The Weeknd/The Weeknd - Save Your Tears (Official Audio).webp",
                audioUrl: "songs/Save Your Tears  The Weeknd/The Weeknd - Save Your Tears (Official Audio).mp3"
            },
            {
                title: "Shayar", artist: "Bharat Chauhan",
                cover: "songs/Shayar  Bharat Chauhan/Bharat Chauhan - Shaayar (Official Audio) ft. Seedhe Maut.webp",
                audioUrl: "songs/Shayar  Bharat Chauhan/Bharat Chauhan - Shaayar (Official Audio) ft. Seedhe Maut.mp3"
            },
            {
                title: "Shor", artist: "Mooroo",
                cover: "songs/Shor  Mooroo/SHOR (Official Audio) - Mooroo ｜ @TalhaAnjum ｜ Prod. by Umair.webp",
                audioUrl: "songs/Shor  Mooroo/SHOR (Official Audio) - Mooroo ｜ @TalhaAnjum ｜ Prod. by Umair.mp3"
            },
            {
                title: "Slow Dancing in the Dark", artist: "Joji",
                cover: "songs/Slow Dancing in the Dark  Joji/SLOW DANCING IN THE DARK.webp",
                audioUrl: "songs/Slow Dancing in the Dark  Joji/SLOW DANCING IN THE DARK.mp3"
            },
            {
                title: "Stick Season", artist: "Noah Kahan",
                cover: "songs/Stick Season  Noah Kahan/Noah Kahan - Stick Season (Lyric Video).webp",
                audioUrl: "songs/Stick Season  Noah Kahan/Noah Kahan - Stick Season (Lyric Video).mp3"
            },
            {
                title: "Sweater Weather", artist: "The Neighbourhood",
                cover: "songs/Sweater Weather  The Neighbourhood/Sweater Weather.webp",
                audioUrl: "songs/Sweater Weather  The Neighbourhood/Sweater Weather.mp3"
            },
            {
                title: "Teenage Dream", artist: "Stephen Dawes",
                cover: "songs/Teenage Dream  Stephen Dawes/Stephen Dawes - Teenage Dream (Lyric Video).webp",
                audioUrl: "songs/Teenage Dream  Stephen Dawes/Stephen Dawes - Teenage Dream (Lyric Video).mp3"
            },
            {
                title: "Video Games", artist: "Lana Del Rey",
                cover: "songs/Video Games  Lana Del Rey/Video Games.webp",
                audioUrl: "songs/Video Games  Lana Del Rey/Video Games.mp3"
            },
            {
                title: "We Hug Now", artist: "Sydney Rose",
                cover: "songs/We Hug Now  Sydney Rose/sydney rose - we hug now (official audio).webp",
                audioUrl: "songs/We Hug Now  Sydney Rose/sydney rose - we hug now (official audio).mp3"
            },
            {
                title: "Wishes", artist: "Hasan Raheem",
                cover: "songs/Wishes  Hasan Raheem Umair  Talwiinder/Hasan Raheem - Wishes ft Talwiinder ｜ Prod by Umair (Official Lyric Video).webp",
                audioUrl: "songs/Wishes  Hasan Raheem Umair  Talwiinder/Hasan Raheem - Wishes ft Talwiinder ｜ Prod by Umair (Official Lyric Video).mp3"
            },
            {
                title: "Work Song", artist: "Hozier",
                cover: "songs/Work Song  Hozier/Hozier - Work Song (Official Video).webp",
                audioUrl: "songs/Work Song  Hozier/Hozier - Work Song (Official Video).mp3"
            },
            {
                title: "Zara Sa", artist: "KK",
                cover: "songs/Zara Sa  KK/KK ｜ Zara Sa - Audio Lyrical ｜ Emraan Hashmi ｜ Sonal Chauhan ｜ Pritam ｜ Sayeed Quadri ｜ Jannat.webp",
                audioUrl: "songs/Zara Sa  KK/KK ｜ Zara Sa - Audio Lyrical ｜ Emraan Hashmi ｜ Sonal Chauhan ｜ Pritam ｜ Sayeed Quadri ｜ Jannat.mp3"
            }
        ];

        let currentSongIndex = 0;
        const globalAudio = new Audio();

        const grid = document.getElementById("mainLibrary");
        
        function renderLibrary() {
            grid.innerHTML = ""; 
            
            if(library.length === 0) {
                grid.innerHTML = `<p style="color:#b3b3b3; grid-column: 1 / -1; text-align: center; margin-top: 40px;">No songs loaded. Add files to your library array.</p>`;
            }

            library.forEach((song, index) => {
                const card = document.createElement("div");
                card.className = "song-card";
                
                // Added an 'onerror' to the image. If you typed the image name slightly wrong, it will load a default grey Spotify image instead of a broken link!
                card.innerHTML = `
                    <img src="${song.cover}" alt="Cover" onerror="this.src='https://misc.scdn.co/liked-songs/liked-songs-640.png'">
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                    <button class="card-play-btn" data-index="${index}">
                        <svg viewBox="0 0 24 24"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>
                    </button>
                `;
                grid.appendChild(card);
            });

            document.querySelectorAll(".card-play-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const index = e.currentTarget.getAttribute("data-index");
                    loadAndPlaySong(index, true);
                });
            });
        }
        
        // Render the library immediately on page load!
        renderLibrary();

        // ==========================================
        // MASTER PLAYER CONTROLS (Play/Pause, Timeline, etc)
        // ==========================================
        const playPauseBtn = document.getElementById("playPauseBtn");
        const playIcon = document.getElementById("playIcon");
        const pauseIcon = document.getElementById("pauseIcon");
        
        // Added 'autoPlay' parameter so the first song loads silently without triggering browser auto-play errors
        function loadAndPlaySong(index, autoPlay = false) {
            currentSongIndex = parseInt(index);
            const song = library[currentSongIndex];
            
            document.getElementById("playerTitle").innerText = song.title;
            document.getElementById("playerArtist").innerText = song.artist;
            
            const pImg = document.getElementById("playerImg");
            pImg.src = song.cover;
            pImg.style.display = "block";
            // Default image fallback if local cover is misspelled
            pImg.onerror = function() { this.src = 'https://misc.scdn.co/liked-songs/liked-songs-640.png'; };

            globalAudio.src = song.audioUrl;
            
            if (autoPlay) {
                globalAudio.play().catch(err => console.log("Waiting for user interaction to play audio."));
                playIcon.style.display = "none";
                pauseIcon.style.display = "block";
            } else {
                playIcon.style.display = "block";
                pauseIcon.style.display = "none";
            }
        }

        // Load the first song data into the bottom player on page load (but don't play it yet)
        if(library.length > 0) {
            loadAndPlaySong(0, false);
        }

        playPauseBtn.addEventListener("click", () => {
            if (!globalAudio.src) return;
            if (globalAudio.paused) {
                globalAudio.play();
                playIcon.style.display = "none";
                pauseIcon.style.display = "block";
            } else {
                globalAudio.pause();
                playIcon.style.display = "block";
                pauseIcon.style.display = "none";
            }
        });

        document.getElementById("nextBtn").addEventListener("click", () => {
            if (library.length === 0) return;
            let newIndex = currentSongIndex + 1;
            if (newIndex >= library.length) newIndex = 0; 
            loadAndPlaySong(newIndex, true);
        });

        document.getElementById("prevBtn").addEventListener("click", () => {
            if (library.length === 0) return;
            let newIndex = currentSongIndex - 1;
            if (newIndex < 0) newIndex = library.length - 1; 
            loadAndPlaySong(newIndex, true);
        });

        const progressBar = document.getElementById("progressBar");
        const progressFill = document.getElementById("progressFill");
        
        globalAudio.addEventListener("timeupdate", () => {
            if (globalAudio.duration) {
                const percent = (globalAudio.currentTime / globalAudio.duration) * 100;
                progressFill.style.width = `${percent}%`;
                
                let currentMins = Math.floor(globalAudio.currentTime / 60);
                let currentSecs = Math.floor(globalAudio.currentTime % 60);
                if (currentSecs < 10) currentSecs = "0" + currentSecs;
                document.getElementById("currentTime").innerText = `${currentMins}:${currentSecs}`;
                
                let durMins = Math.floor(globalAudio.duration / 60);
                let durSecs = Math.floor(globalAudio.duration % 60);
                if (durSecs < 10) durSecs = "0" + durSecs;
                document.getElementById("durationTime").innerText = `${durMins}:${durSecs}`;
            }
        });

        progressBar.addEventListener("click", (e) => {
            if (!globalAudio.duration) return;
            const width = progressBar.clientWidth;
            const clickX = e.offsetX;
            const duration = globalAudio.duration;
            globalAudio.currentTime = (clickX / width) * duration;
        });

        // Mobile Menu Toggle
        document.querySelector(".home").addEventListener("click", () => {
            document.querySelector(".left").classList.toggle("active");
        });
    