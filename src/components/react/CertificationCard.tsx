import { useState } from 'react';
import { Direction } from '@models/global';
import { fadeIn } from '@utils/motion';
import { motion } from 'framer-motion';
import Modal from './Modal';
import cx from 'classnames';
import { Document, Page, pdfjs } from 'react-pdf';
import { useWindowSize } from '@uidotdev/usehooks';

import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

type Props = {
  title: string;
  issued: string;
  sourceImage: string;
  sourceCredential?: string;
  pdfCredential?: string;
  heightImage?: string;
  rounded?: boolean;
  index: number;
};

type ScreenSize = {
  width: number;
  height: number;
};

const CertificationCard = ({
  title,
  issued,
  sourceImage,
  sourceCredential,
  pdfCredential,
  heightImage,
  rounded,
  index,
}: Props) => {
  const screenSize: ScreenSize = useWindowSize();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {pdfCredential && (
        <Modal visible={showModal} onVisible={setShowModal}>
          <div
            className={cx(
              'rounded-3xl grow text-center min-w-[20rem] min-h-[20rem]',
              {
                'overflow-auto h-[90vh]': screenSize.height < 500,
              }
            )}
          >
            <Document
              file={pdfCredential}
              className={cx(
                '[&>div]:rounded-3xl [&_canvas]:rounded-3xl',
                { '[&_canvas]:!w-full': screenSize.width < 640 },
                { '[&_canvas]:!h-full': screenSize.height > 500 }
              )}
              loading={
                <div className="w-full h-full flex justify-center items-center">
                  <i className="gg-spinner"></i>
                </div>
              }
            >
              <Page pageNumber={1} renderTextLayer={false} />
            </Document>
          </div>
        </Modal>
      )}

      <motion.div
        className="certification-card flex items-center rounded-2xl px-2 w-full sm:w-auto"
        variants={fadeIn(Direction.UP, 'tween', 0.25, index * 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex justify-center items-center p-2 bg-white rounded-2xl w-28">
          <img
            src={sourceImage}
            alt={`certificate-${title.toLowerCase()}`}
            className={cx('object-contain', { 'rounded-2xl': rounded })}
            style={{ height: heightImage ?? '' }}
          />
        </div>
        <div className="flex flex-col w-full pl-4 py-2 h-full">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="font-medium opacity-80 text-sm">
            Issued: <i>{issued}</i>
          </p>
          {pdfCredential && (
            <button
              className="certification-card-button"
              onClick={() => setShowModal(true)}
            >
              Show credential
            </button>
          )}
          {sourceCredential && (
            <button className="certification-card-button">
              <a href={sourceCredential} target="_blank">
                Show credential
              </a>
            </button>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default CertificationCard;
