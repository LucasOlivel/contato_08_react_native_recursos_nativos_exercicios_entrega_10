import React from 'react';
import { Platform } from 'react-native';

import { HeaderButtons } from 'react-navigation-header-buttons';

import { Ionicons } from '@expo/vector-icons';

const BotaoCabecalho = (props) => {
    return(
        <HeaderButtons
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'black' : '#FC9208'}
        />
    );
};

export default BotaoCabecalho; 