import React from 'react';
import JSZip from 'jszip';
import axios from 'axios';

const DownloadGitFolder = ({ repoUrl, folderPath }) => {
 
      const downloadFolder = async () => {
        const [owner, repo] = repoUrl.split('/').slice(-2);
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}`;
    
        const zip = new JSZip();
    
        const addFolderToZip = async (url, zipFolder) => {
          const response = await axios.get(url, {
            headers: { Accept: 'application/vnd.github.v3+json' },
          });
    
          for (const file of response.data) {
            if (file.type === 'file') {
              const fileResponse = await axios.get(file.download_url, {
                responseType: 'arraybuffer',
              });
              zipFolder.file(`${file.name}`, fileResponse.data);
            } else if (file.type === 'dir') {
              const newFolder = zipFolder.folder(file.name);
              
              if (newFolder instanceof JSZip) {
                await addFolderToZip(file.url, newFolder);
              }
            }
          }
        };
    
        try {
          await addFolderToZip(apiUrl, zip.folder(folderPath));
    
          const content = await zip.generateAsync({ type: 'blob' });
          const link = document.createElement('a');
          link.href = URL.createObjectURL(content);
          link.download = `${folderPath}.zip`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error) {
          console.error('Error downloading folder:', error);
        }
      };
    
     return <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }} onClick={downloadFolder}>Download {folderPath}</span>;

};

export default DownloadGitFolder;