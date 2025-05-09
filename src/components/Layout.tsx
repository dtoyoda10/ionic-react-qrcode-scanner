import React, { ReactNode } from 'react';
import {
    IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon
} from '@ionic/react';
import { qrCodeOutline } from 'ionicons/icons';

import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <IonTabs>
            {children}

            <IonTabBar className={styles.layoutTabBar}>
                <IonTabButton className={styles.layoutTabItem} tab="scanner" href="/scanner">
                    <IonIcon icon={qrCodeOutline} />
                    <IonLabel>Scanner</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
};

export default Layout;