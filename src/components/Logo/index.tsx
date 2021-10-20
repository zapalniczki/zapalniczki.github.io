import { Box } from 'components'
import React from 'react'

type Props = {
  expanded?: boolean
}

const Logo = ({ expanded }: Props) => (
  <Box height={!expanded ? '6rem' : '4.5rem'}>
    <svg
      height="100%"
      style={{
        shapeRendering: 'geometricPrecision',
        textRendering: 'geometricPrecision',
        imageRendering: 'crisp-edges',
        fillRule: 'evenodd',
        clipRule: 'evenodd'
      }}
      version="1.1"
      viewBox="0 0 6000 3000"
      width="auto"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="Warstwa_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer" />
        <path
          className="fil0"
          d="M435.71 935.58c15.34,-4.61 39.9,-9.59 73.66,-14.98 33.76,-5.37 68.27,-8.05 103.57,-8.05 33.75,0 64.07,2.29 90.93,6.9 26.85,4.61 49.49,13.81 67.9,27.64 18.42,13.8 32.22,32.61 41.42,56.39 9.22,23.78 13.83,54.86 13.83,93.22l0 225.57c38.34,-15.34 74.81,-26.09 109.32,-32.22 34.54,-6.14 72.51,-9.22 113.93,-9.22 73.66,0 143.49,13.05 209.47,39.13 65.98,26.1 124.3,64.07 174.94,113.95 50.63,49.86 90.54,111.64 119.68,185.28 29.17,73.66 43.74,158.83 43.74,255.5 0,99.76 -14.96,186.83 -44.88,261.25 -29.93,74.42 -71.74,136.2 -125.45,185.3 -53.71,49.1 -119.29,86.32 -196.81,111.64 -77.49,25.32 -163.03,37.97 -256.64,37.97 -101.28,0 -187.21,-11.9 -257.79,-35.68 -70.59,-23.78 -130.45,-53.32 -179.55,-88.61 -67.51,-47.57 -101.27,-108.96 -101.27,-184.16l0 -1226.82zm538.61 1226.82c70.58,0 125.44,-24.14 164.59,-72.49 39.12,-48.34 58.68,-120.07 58.68,-215.22 0,-96.67 -19.95,-168.79 -59.85,-216.35 -39.88,-47.59 -93.59,-71.37 -161.11,-71.37 -30.71,0 -57.17,3.07 -79.41,9.22 -22.25,6.12 -46.42,15.34 -72.52,27.61l0 501.8c16.88,10.73 37.22,19.56 61,26.46 23.78,6.9 53.32,10.34 88.62,10.34zm1132.48 269.33c-15.34,4.59 -39.52,9.2 -72.52,13.81 -32.97,4.61 -67.12,6.9 -102.42,6.9 -33.75,0 -64.07,-2.29 -90.93,-6.9 -26.85,-4.61 -49.49,-13.81 -67.9,-27.64 -18.42,-13.8 -32.59,-32.59 -42.56,-56.39 -9.98,-23.78 -14.98,-54.86 -14.98,-93.22l0 -690.52c0,-35.29 6.54,-65.61 19.56,-90.93 13.05,-25.32 31.86,-47.95 56.39,-67.9 24.57,-19.96 54.86,-37.98 90.94,-54.08 36.05,-16.12 74.8,-30.32 116.24,-42.59 41.42,-12.29 84.4,-21.87 128.89,-28.78 44.51,-6.9 89,-10.36 133.51,-10.36 73.64,0 131.96,14.19 174.94,42.58 42.95,28.39 64.44,74.81 64.44,139.28 0,21.46 -3.07,42.56 -9.2,63.29 -6.14,20.71 -13.83,39.52 -23.02,56.39 -32.22,0 -65.22,1.54 -98.98,4.61 -33.76,3.05 -66.76,7.66 -98.98,13.81 -32.22,6.12 -62.54,12.66 -90.91,19.56 -28.39,6.9 -52.56,14.95 -72.51,24.17l0 784.91zm925.3 -246.3c26.08,0 54.86,-2.68 86.32,-8.05 31.44,-5.37 54.86,-12.66 70.2,-21.88l0 -184.13 -165.74 13.81c-42.95,3.07 -78.24,12.27 -105.88,27.61 -27.61,15.36 -41.42,38.37 -41.42,69.07 0,30.69 11.88,55.62 35.69,74.81 23.78,19.17 64.05,28.76 120.83,28.76zm-18.41 -904.6c82.85,0 158.44,8.44 226.71,25.32 68.3,16.88 126.62,42.59 174.94,77.13 48.34,34.51 85.56,78.24 111.63,131.2 26.1,52.93 39.15,115.46 39.15,187.59l0 515.58c0,39.9 -11.14,72.52 -33.39,97.83 -22.24,25.32 -48.71,47.2 -79.42,65.62 -99.73,59.83 -240.13,89.75 -421.21,89.75 -81.32,0 -154.61,-7.68 -219.81,-23.02 -65.22,-15.34 -121.23,-38.37 -168.03,-69.05 -46.81,-30.69 -82.88,-69.81 -108.2,-117.4 -25.32,-47.56 -37.98,-102.81 -37.98,-165.71 0,-105.88 31.47,-187.23 94.37,-243.99 62.93,-56.78 160.37,-92.07 292.33,-105.88l301.55 -32.22 0 -16.12c0,-44.51 -19.56,-76.34 -58.71,-95.52 -39.13,-19.19 -95.52,-28.78 -169.18,-28.78 -58.32,0 -115.08,6.15 -170.32,18.42 -55.25,12.27 -105.13,27.61 -149.62,46.02 -19.95,-13.8 -36.83,-34.9 -50.63,-63.29 -13.81,-28.39 -20.74,-57.93 -20.74,-88.61 0,-39.91 9.61,-71.74 28.78,-95.52 19.18,-23.78 48.71,-44.12 88.62,-61 44.51,-16.88 97.05,-29.15 157.66,-36.83 60.64,-7.69 117.79,-11.52 171.5,-11.52zm1109.45 768.79c0,39.9 12.66,68.29 37.98,85.17 25.32,16.88 61,25.32 107.03,25.32 23.02,0 46.81,-1.93 71.37,-5.76 24.54,-3.82 46.02,-8.82 64.44,-14.95 13.8,16.88 25.71,35.66 35.68,56.4 9.98,20.7 14.96,45.63 14.96,74.8 0,58.3 -21.86,105.89 -65.59,142.72 -43.74,36.83 -120.86,55.24 -231.35,55.24 -135.03,0 -238.99,-30.71 -311.89,-92.07 -72.88,-61.4 -109.32,-161.13 -109.32,-299.24l0 -985.16c16.87,-4.61 41.05,-9.58 72.51,-14.97 31.44,-5.37 64.83,-8.05 100.13,-8.05 67.51,0 120.07,11.9 157.66,35.68 37.59,23.79 56.39,74.03 56.39,150.77l0 147.32 301.53 0c9.22,16.88 18.02,37.98 26.49,63.29 8.44,25.32 12.66,53.32 12.66,84.01 0,53.71 -11.91,92.46 -35.69,116.25 -23.78,23.78 -55.64,35.68 -95.54,35.68l-209.45 0 0 347.55zm630.69 98.98c-16.88,-38.37 -34.91,-81.32 -54.08,-128.88 -19.19,-47.59 -39.15,-102.06 -59.85,-163.45 -20.71,-61.37 -42.2,-131.57 -64.45,-210.59 -22.27,-79.03 -45.66,-169.96 -70.22,-272.77 21.49,-21.49 50.27,-40.29 86.32,-56.39 36.08,-16.12 75.59,-24.17 118.54,-24.17 53.71,0 98.23,11.12 133.52,33.36 35.29,22.27 61.37,64.08 78.25,125.45l181.83 633 9.22 0c18.42,-52.18 36.44,-108.96 54.08,-170.33 17.66,-61.39 34.93,-124.68 51.81,-189.91 16.87,-65.22 32.61,-130.42 47.17,-195.64 14.58,-65.22 27.24,-129.3 37.97,-192.2 55.25,-29.15 115.86,-43.73 181.87,-43.73 53.7,0 98.19,11.51 133.49,34.53 35.29,23.01 52.93,62.91 52.93,119.69 0,41.42 -5.37,89.37 -16.1,143.86 -10.76,54.47 -24.93,112.4 -42.59,173.79 -17.63,61.37 -38.37,124.66 -62.15,189.88 -23.78,65.23 -48.71,129.28 -74.8,192.21 -26.08,62.9 -52.93,122.37 -80.57,178.37 -27.61,56.03 -54.46,106.27 -80.56,150.78 -42.96,75.18 -82.86,136.57 -119.69,184.13 -36.83,47.57 -72.12,84.79 -105.88,111.64 -33.76,26.86 -67.52,45.27 -101.27,55.25 -33.76,9.97 -69.06,14.95 -105.89,14.95 -64.44,0 -116.61,-19.17 -156.51,-57.54 -39.91,-38.37 -63.69,-88.22 -71.37,-149.61 49.12,-38.37 98.22,-80.96 147.32,-127.74 49.1,-46.81 93.61,-94.76 133.49,-143.86 -26.07,-7.68 -54.07,-25.71 -84,-54.1 -29.93,-28.39 -62.54,-81.71 -97.83,-159.98z"
          fill="#0A0A0A"
        />
        <path
          className="fil1"
          d="M5108.91 97.13c277.72,0 502.83,225.11 502.83,502.82 0,239.7 -167.69,440.19 -392.19,490.58l0 -417.4 -221.28 0 0 417.4c-224.49,-50.39 -392.18,-250.88 -392.18,-490.58 0,-277.71 225.11,-502.82 502.82,-502.82z"
          fill="#E6070F"
        />
      </g>
    </svg>
  </Box>
)

export default Logo
