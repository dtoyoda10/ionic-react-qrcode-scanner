import React, { useState } from 'react';
import {
    IonPage,
    IonContent,
} from '@ionic/react';
import BarcodeScanner from 'react-qr-barcode-scanner';

import scannerIcon from '../assets/icons/scanner.svg';
import styles from './scanner.module.css';

const TicketScanner: React.FC = () => {
    const [data, setData] = useState<string | undefined>(undefined);

    const handleScanUpdate = (result: any) => {
        console.log('Scan result:', result);

        if (result?.getText) {
            setData(result.getText());
        } else {
            setData(undefined);
        }
    };

    return (
        <IonPage>
            <IonContent fullscreen className={styles.scannerPage}>
                <div className={styles.scannerContent}>
                    <div className={styles.scanBox} />
                    <div className={styles.scanOutline}>
                        <img
                            src={scannerIcon}
                            alt="Scanner Icon"
                            className={styles.scannerIcon}
                        />
                        {!data && <div className={styles.scannerLine} />}
                    </div>

                    <div className={styles.scannerContainer}>
                        <BarcodeScanner
                            width={250}
                            height={250}
                            onUpdate={handleScanUpdate}
                        />
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default TicketScanner;
