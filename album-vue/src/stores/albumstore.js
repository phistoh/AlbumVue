import { defineStore } from 'pinia'

import albums from "@/data/albums.json"

export const useAlbumStore = defineStore('AlbumStore', {
    state: () => ({ 
        // Just for testing...
        // albums: [
        //     { artist: "A Forest Of Stars", album: "Grave Mounds and Grave Mistakes", mediatype: "cd" },
        //     { artist: "Casper", album: "Hinterland", mediatype: "cd" },
        //     { artist: "Black Kirin", album: "秦淮", mediatype: "digital" },
        //     { artist: "The Ruins of Beverast", album: "Exuvia", mediatype: "vinyl" },
        //     { artist: "Bring Me the Horizon", album: "Post Human: Survival Horror", mediatype: "tape" },
        //     { artist: "ΔAIMON", album: "ΔAIMON", mediatype: "cd" },
        //     { artist: "Dance Gavin Dance", album: "Artificial Selection", mediatype: "cd" },
        //     { artist: "Danzig", album: "Danzig II: Lucifuge", mediatype: "cd" },
        //     { artist: "Darkthrone", album: "Arctic Thunder", mediatype: "cd" },
        //     { artist: "Darkthrone", album: "Transilvanian Hunger", mediatype: "cd" },
        //     { artist: "Darkthrone", album: "Circle The Wagons", mediatype: "cd" },
        //     { artist: "Darkthrone", album: "Old Star", mediatype: "cd" },
        //     { artist: "Darkthrone", album: "The Underground Resistance", mediatype: "cd" },
        //     { artist: "Darkthrone", album: "Under a Funeral Moon", mediatype: "cd" },
        //     { artist: "Daughters", album: "You Won't Get What You Want", mediatype: "cd" },
        //     { artist: "David Bowie", album: "The Man Who Sold the World", mediatype: "cd" },
        //     { artist: "DCVDNS", album: "D.W.I.S", mediatype: "cd" },
        //     { artist: "De La Soul", album: "And the Anonymous Nobody", mediatype: "cd" },
        //     { artist: "DefRage", album: "Jackal", mediatype: "cd" },
        //     { artist: "Deichkind", album: "Wer sagt denn das", mediatype: "cd" },
        //     { artist: "Deicide", album: "Legion", mediatype: "cd" },
        //     { artist: "Deicide", album: "The Stench of Redemption", mediatype: "cd" },
        //     { artist: "Demons & Wizards", album: "Demons & Wizards", mediatype: "cd" },
        //     { artist: "Demons & Wizards", album: "III", mediatype: "cd" },
        //     { artist: "Dendemann", album: "da nich für!", mediatype: "cd" },
        //     { artist: "Depeche Mode", album: "Violator", mediatype: "cd" },
        //     { artist: "Devilment", album: "II - The Mephisto Waltzes", mediatype: "cd" },
        //     { artist: "Die Orsons", album: "Denn Dein Ist Das Reich Und Die Kraft Und Die Herrlichkeit, In Ewigkeit, Orsons", mediatype: "cd" },
        //     { artist: "Dimmu Borgir", album: "Enthrone Darkness Triumphant", mediatype: "cd" },
        //     { artist: "Dio", album: "Dream Evil", mediatype: "cd" },
        //     { artist: "Dio", album: "Holy Diver", mediatype: "cd" },
        //     { artist: "Dio", album: "Lock Up the Wolves", mediatype: "cd" },
        //     { artist: "Dio", album: "Sacred Heart", mediatype: "cd" },
        //     { artist: "Dio", album: "The Last in Line", mediatype: "cd" },
        //     { artist: "Disguised", album: "Separation", mediatype: "cd" },
        //     { artist: "Disturbed", album: "Believe", mediatype: "cd" },
        //     { artist: "DNP", album: "Bis Einer Weint", mediatype: "cd" },
        //     { artist: "Dornenreich", album: "Her von welken Nächten", mediatype: "cd" },
        //     { artist: "Dragged Into Sunlight", album: "Hatred For Mankind", mediatype: "cd" },
        //     { artist: "Dr. Faustus & Dr. Jekyll", album: "2 Chirurgen drehen durch 2", mediatype: "cd" },
        //     { artist: "Dragged Into Sunlight / Gnaw Their Tongues", album: "NV", mediatype: "cd" },
        //     { artist: "Dropkick Murphys", album: "The Warrior's Code", mediatype: "cd" },
        //     { artist: "Drudkh", album: "A Furrow Cut Short", mediatype: "cd" },
        //     { artist: "Drudkh", album: "Autumn Aurora", mediatype: "cd" },
        //     { artist: "Drudkh", album: "Handful of Stars", mediatype: "cd" },
        //     { artist: "Drudkh", album: "Eternal Turn Of The Wheel", mediatype: "cd" },
        //     { artist: "Drudkh", album: "Microcosmos", mediatype: "cd" },
        //     { artist: "Drudkh", album: "They Often See Dreams About the Spring", mediatype: "cd" },
        //     { artist: "DUO", album: "Double Vision", mediatype: "cd" }
        // ]
        albums,
     })
})