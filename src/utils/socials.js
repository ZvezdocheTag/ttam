import okLogo from './ok.svg';
import twLogo from './tw.svg';
import vkLogo from './vk.svg';
import fbLogo from './fb.svg';

const Share = {
  vk: function(purl, ptitle, pimg, text) {
    let url = 'http://vk.com/share.php?';
    url += 'url=' + encodeURIComponent(purl);
    url += '&title=' + encodeURIComponent(ptitle);
    url += '&noparse=true';

    return Share.popup(url);
  },

  ok: function(purl, text) {
    let url = `https://connect.ok.ru/offer?url=${encodeURIComponent(purl)}`;

    return Share.popup(url);
  },

  fb: function(purl, ptitle, pimg, text) {
    let url = 'http://www.facebook.com/sharer.php?s=100';
    url += '&p[title]=' + encodeURIComponent(ptitle);
    url += '&p[summary]=' + encodeURIComponent(text);
    url += '&p[url]=' + encodeURIComponent(purl);
    url += '&p[images][0]=' + encodeURIComponent(pimg);

    return Share.popup(url);
  },

  tw: function(purl, ptitle) {
    let url = 'http://twitter.com/share?';
    url += 'text=' + encodeURIComponent(ptitle);
    url += '&url=' + encodeURIComponent(purl);
    url += '&counturl=' + encodeURIComponent(purl);

    return Share.popup(url);
  },

  popup: function(url) {
    return new Promise(resolve => {
      resolve(window.open(url, '', 'toolbar=0,status=0,width=626,height=436'));
    });
  }
};

const socials = [
  { key: 'vk', brandColor: '#45668E', img: vkLogo, shareLink: Share.vk },
  { key: 'ok', brandColor: '#EB722E', img: okLogo, shareLink: Share.ok },
  { key: 'fb', brandColor: '#3B5998', img: fbLogo, shareLink: Share.fb },
  { key: 'tw', brandColor: '#00ACED', img: twLogo, shareLink: Share.tw }
];

export default socials;
