const environmentVariables = require('../testData/environment');

export interface Member {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    authTokenName: string;
}

export const userForSettingsTests: Member = {
    email: 'testingaltyemails@altyuitests4.mail7.io',
    password: environmentVariables.userPassword,
    firstName: 'automation',
    lastName: 'test',
    phoneNumber: '+995557922343',
    authTokenName: 'AUTH_TOKEN_FOR_SETTINGS',
};

export const userForLogin: Member = {
    email: 'testingaltysecond@altyuitests4.mail7.io',
    password: environmentVariables.userPassword,
    firstName: 'automation',
    lastName: 'test',
    phoneNumber: '+380999999999',
    authTokenName: 'AUTH_TOKEN_FOR_LOGIN',
};
export interface FAQs {
    whatIsNFTgamingButton: string;
    WhatIsNFTgamingContent: string;
    howDoIEarnMoneyThroughNFTgamingButton: string;
    HowDoIEarnMoneyThroughNFTgamingContent: string;
    howManyNFTgamesAreThereButton: string;
    HowManyNFTgamesAreThereContent: string;
    canIearnMoneyThroughNFTgamingButton: string;
    CanIearnMoneyThroughNFTgamingContent: string;

}

export const faqsData: FAQs = {
    whatIsNFTgamingButton: 'What Is NFT gaming?',
    WhatIsNFTgamingContent: 'NFT gaming is playing NFT games that offer a way to earn money while playing. These games feature NFTs as characters, assets, and in-game items which you can sell and trade to other players. Other games use a play-to-earn model wherein players need to grind the game, beat other players, and accomplish missions in exchange for digital currency. NFT gaming is very popular in many places around the world, particularly in developing countries such as the Philippines and Venezuela, as it gives people a new to earn money and put food on the table.',
    howDoIEarnMoneyThroughNFTgamingButton: 'How do I earn money through NFT gaming?',
    HowDoIEarnMoneyThroughNFTgamingContent: 'For most NFT games out there, you need to play to earn money. NFT games function on the play-to-earn model, where the more people play the game, the bigger chances of earning money. You have to do different things to earn assets and currency, depending on the game. For example, for Axie Infinity, players usually earn their currency through battling other players or going through adventure mode. However, games such as The Sandbox use a different type of model wherein you can buy, develop, build, and sell digital land to other players.',
    howManyNFTgamesAreThereButton: 'How many NFT games are there?',
    HowManyNFTgamesAreThereContent: 'There are tons of different NFT games out there. Since we are currently going through somewhat of an NFT craze, there are new games being released almost every day. We have come a long way since the beginnings of cryptocurrency, and the advancement of all these different NFT games is proof of that. However, among the most popular NFT games out there are Axie Infinity, Gods Unchained, Battle of the Guardians, and Splinterlands.',
    canIearnMoneyThroughNFTgamingButton: 'Can I earn money through NFT gaming?',
    CanIearnMoneyThroughNFTgamingContent: 'Yes, you can earn money through NFT gaming. NFT gaming has given people all around the world a ticket to economic freedom. Certain assets, items, and rewards you get in NFT games are actually NFTs themselves, which you can sell on the NFT marketplace. Additionally, you can also earn in-game cryptocurrency, which you can use in the real world or even trade for fiat currency, depending on your needs and goals.',
};
