/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'


import { FileExplorer } from 'ui'

export default {
  title        :'elements/FileExplorer',
  component    :FileExplorer,
  subcomponents:{
    'File'  :FileExplorer.File,
    'Folder':FileExplorer.Folder
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,*/
    ]
  }
}

export const Default = () => (
  <FileExplorer
    rootName='Select the file you would like to upload'
    rootIcon='g'
  >
    <FileExplorer.Folder name='Music'>
      <FileExplorer.File name='a-good-song.mp3'/>
      <FileExplorer.File name='mymp3.mp3'/>
      <FileExplorer.File name='highQuality.wave'/>
    </FileExplorer.Folder>
    <FileExplorer.Folder
      name='Souvenirs'
      open
    >
      <FileExplorer.File name='holidays.jpg'/>
      <FileExplorer.File name='China.png'/>
      <FileExplorer.File name='lastNight.jpg'/>
    </FileExplorer.Folder>
    <FileExplorer.Folder
      name='Images'
      open
    >
      <FileExplorer.File name='holidays.jpg'/>
      <FileExplorer.File name='China.png'/>
      <FileExplorer.File name='lastNight.jpg'/>
    </FileExplorer.Folder>

  </FileExplorer>
)


export const Size = () => (
  <FileExplorer
    rootName='Select the file you would like to upload'
    rootIcon='g'
    className='s2'
  >
    <FileExplorer.Folder name='Music'>
      <FileExplorer.File name='a-good-song.mp3'/>
      <FileExplorer.File name='mymp3.mp3'/>
      <FileExplorer.File name='highQuality.wave'/>
    </FileExplorer.Folder>
    <FileExplorer.Folder
      name='Souvenirs'
      open
    >
      <FileExplorer.File name='holidays.jpg'/>
      <FileExplorer.File name='China.png'/>
      <FileExplorer.File name='lastNight.jpg'/>
    </FileExplorer.Folder>
    <FileExplorer.Folder
      name='Images'
      open
    >
      <FileExplorer.File name='holidays.jpg'/>
      <FileExplorer.File name='China.png'/>
      <FileExplorer.File name='lastNight.jpg'/>
    </FileExplorer.Folder>

  </FileExplorer>
)


export const Colors = () => (
  <FileExplorer
    rootName='Select the file you would like to upload'
    rootIcon='g'
    className='s1 x-primary y-secondary z-accent2'
  >
    <FileExplorer.Folder name='Music'>
      <FileExplorer.File name='a-good-song.mp3'/>
      <FileExplorer.File name='mymp3.mp3'/>
      <FileExplorer.File name='highQuality.wave'/>
    </FileExplorer.Folder>
    <FileExplorer.Folder
      name='Souvenirs'
      open
    >
      <FileExplorer.File name='holidays.jpg'/>
      <FileExplorer.File name='China.png'/>
      <FileExplorer.File name='lastNight.jpg'/>
    </FileExplorer.Folder>
    <FileExplorer.Folder
      name='Images'
      open
    >
      <FileExplorer.File name='holidays.jpg'/>
      <FileExplorer.File name='China.png'/>
      <FileExplorer.File name='lastNight.jpg'/>
    </FileExplorer.Folder>

  </FileExplorer>
)


