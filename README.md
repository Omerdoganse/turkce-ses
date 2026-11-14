# turkce-ses

Kendi sesimle Türkçe konuşan bir yapay zeka sesi (metinden sese / TTS) projesi.

Hazır bir Türkçe [Piper](https://github.com/rhasspy/piper) modeli, kendi ses kayıtlarımla ince ayarlanarak (fine-tune) eğitilir. Eğitilen model internetsiz, tamamen yerel çalışır.

## Donanım

- Windows + WSL2 (Ubuntu)
- NVIDIA RTX 4050 (6 GB VRAM)

## Adımlar

| # | Adım | Durum |
|---|------|-------|
| 1 | Okunacak Türkçe cümle listesi (`cumleler.js`, ilk 200 cümle) | ✅ |
| 2 | Kayıt programı (`kayit.html`, Chrome/Edge ile açılır) | ✅ |
| 3 | Kurulum (WSL2, Python, Piper, CUDA) | ⏳ |
| 4 | Ses kayıtları (1–2 saat) | ⏳ |
| 5 | Veri setini hazırlama | ⏳ |
| 6 | Eğitim (ince ayar) | ⏳ |
| 7 | Metni sesle okutma | ⏳ |

## Gizlilik

Bu depo herkese açıktır, ama **ses kayıtları, veri seti ve eğitilmiş model bu depoda yer almaz**. Bunlar sadece yerel bilgisayarda tutulur ve `.gitignore` ile dışarıda bırakılır. Depoda yalnızca kod, cümle listesi ve kurulum dosyaları bulunur.
