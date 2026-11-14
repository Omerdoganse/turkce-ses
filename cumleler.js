// Okunacak cümleler. Her satır bir cümle; satır numarası kayıt dosyasının adıdır (0001.wav = 1. satır).
// Var olan satırların sırasını DEĞİŞTİRME; yeni cümleleri sadece sona ekle.
const CUMLELER = `
Bugün hava çok güzel, biraz yürüyüşe çıkalım mı?
Sabah erkenden kalkıp çayı demledim.
Öğleden sonra yağmur yağacağını söylüyorlar.
Çocuklar bahçede top oynarken güneş battı.
Yarın sabah saat dokuzda toplantımız var.
Bu kitabı geçen yıl okumuştum, çok beğenmiştim.
Şehrin gürültüsünden uzaklaşmak istiyorum.
Annem her pazar günü börek yapar.
Işıkları kapatmayı unutma lütfen.
Köprüden geçerken denizi seyretmeyi severim.
Üç gün önce İzmir'den döndük.
Bu soruyu nasıl çözeceğimi bilmiyorum.
Küçük kardeşim okula bu yıl başladı.
Öğretmen tahtaya uzun bir cümle yazdı.
Akşam yemeğinde mercimek çorbası içtik.
Telefonumun şarjı bitmek üzere.
Dağın zirvesinde kar hâlâ erimemiş.
Müzik dinlemek beni her zaman rahatlatır.
Pazardan taze domates ve salatalık aldım.
Otobüs yine on dakika gecikti.
Geçen hafta yeni bir işe başladım.
Kapıyı çalan kimdi, gördün mü?
Bilgisayarı yeniden başlatmayı denedin mi?
Yaz tatilinde Ege kıyılarını gezeceğiz.
Dün gece çok tuhaf bir rüya gördüm.
Kahvaltıda zeytin, peynir ve bal vardı.
Bu yolun sonunda eski bir değirmen var.
Arkadaşım bana güzel bir hediye getirdi.
Sınav sonuçları yarın açıklanacak.
Kedimiz bütün gün pencerenin önünde uyur.
Çay mı içersin, yoksa kahve mi?
Ödevimi bitirdikten sonra dışarı çıkacağım.
Rüzgâr o kadar şiddetliydi ki şemsiyem kırıldı.
Babam gençliğinde iyi bir yüzücüymüş.
Bu fotoğrafı nerede çektiğimizi hatırlıyor musun?
İstanbul'da trafik her geçen gün artıyor.
Fırından yeni çıkmış ekmeğin kokusu harika.
Lütfen biraz daha yavaş konuşur musunuz?
Kütüphanede sessiz olmak gerekiyor.
Oğuz, ağabeyiyle birlikte balığa gitti.
Göğü kaplayan bulutlar birden dağıldı.
Doğum günün kutlu olsun, nice mutlu yıllara!
Yağmurdan sonra toprak mis gibi kokar.
Jale Hanım müdürle görüşmek istiyor.
Projeyi cuma gününe kadar teslim etmeliyiz.
Bu filmi izlemeni kesinlikle tavsiye ederim.
Çiçekleri sulamayı yine unutmuşum.
Uçağımız saat altıyı çeyrek geçe kalkıyor.
Hangi rengi daha çok seviyorsun?
Dedem bize eski günleri anlatmayı çok sever.
Üşüdüysen pencereyi kapatabilirim.
Marketten süt, yumurta ve un alır mısın?
Böyle güzel bir manzarayı ilk kez görüyorum.
Yolculuk yaklaşık dört buçuk saat sürecek.
Şu anda meşgulüm, sizi sonra arayabilir miyim?
Kış geldiğinde soba başında kestane yeriz.
Bu konuyu daha ayrıntılı konuşmamız gerek.
Jimnastik salonu akşam ona kadar açık.
Öğrenciler müzeyi büyük bir merakla gezdi.
Hiçbir şey göründüğü kadar kolay değildir.
Ilık bir duş alıp erkenden yatacağım.
Yeni aldığım ayakkabılar ayağımı sıkıyor.
Güneş doğarken kuşlar ötmeye başladı.
Bana doğruyu söylediğin için teşekkür ederim.
Çantamı evde unuttuğumu yolda fark ettim.
Fiyatlar geçen aya göre yüzde on arttı.
Bu şarkıyı duyunca çocukluğum aklıma geliyor.
Doktor günde iki litre su içmemi söyledi.
Vapur iskeleye yanaşırken martılar çığlık atıyordu.
Tabii ki gelirim, saat kaçta buluşuyoruz?
Eski mahallemizdeki fırın hâlâ açıkmış.
Zor zamanlarda dostların değeri anlaşılır.
Çocuk, düşen dişini yastığının altına koydu.
Müdür Bey bugün izinli, yarın gelecek.
Yemekten sonra biraz yürümek sindirime iyi gelir.
Şifremi unuttum, nasıl yenileyebilirim?
Gökyüzünde yüzlerce yıldız parlıyordu.
Ağaçların yaprakları sonbaharda sararır.
Bu işi bitirmek için iki haftamız kaldı.
Özür dilerim, sizi beklettim.
Köyde hayat şehirdekinden çok daha sakin.
Buzdolabında yiyecek hiçbir şey kalmamış.
Trenin kalkmasına yirmi beş dakika var.
Jüri üyeleri kararını oy birliğiyle verdi.
Sağlığına dikkat etmezsen sonra pişman olursun.
Kırmızı ışıkta geçmek çok tehlikelidir.
Ne zaman isterseniz bize gelebilirsiniz.
Uzun bir günün ardından çok yorgunum.
Bisikletimin lastiği patladı, tamir etmem lazım.
Öğle arasında parkta sandviç yedik.
Bu kelimenin anlamını sözlükten baktım.
Hafta sonu için bir planın var mı?
Şoför, yolcuları güvenle otele ulaştırdı.
Çocukken en sevdiğim oyun saklambaçtı.
Dışarısı buz gibi, atkını almadan çıkma.
Görüşmeyeli nasılsın, işler yolunda mı?
Yüzmeyi yedi yaşımdayken öğrendim.
Düğün gelecek ayın on dördünde yapılacak.
Mağaza sabah onda açılıp akşam dokuzda kapanıyor.
Bu ilacı yemeklerden sonra almalısınız.
Türkçe, sondan eklemeli bir dildir.
Ankara, Türkiye'nin başkentidir.
Dünya, Güneş'in çevresinde bir yılda döner.
Su, yüz derecede kaynar ve sıfır derecede donar.
Bir yılda on iki ay, bir haftada yedi gün vardır.
Arılar çiçeklerden topladıkları özle bal yapar.
İpek böceği dut yaprağıyla beslenir.
Van Gölü, ülkemizin en büyük gölüdür.
Zeytin ağacı yüzlerce yıl yaşayabilir.
Göçmen kuşlar kışın sıcak ülkelere uçar.
Yapay zekâ günlük hayatımıza hızla giriyor.
Bu program yazdığınız metni sesli olarak okur.
Dosyayı kaydetmeden bilgisayarı kapatma.
İnternet bağlantısı bugün çok yavaş.
Güncellemeyi yükledikten sonra sorun düzeldi.
Ekran kartının sürücüsünü yenilemen gerekiyor.
Mesajını gördüm ama cevap yazmaya fırsatım olmadı.
Toplantının bağlantısını e-postayla gönderdim.
Yedek almayı alışkanlık hâline getirmelisin.
Klavyedeki bazı tuşlar çalışmıyor.
Ne güzel bir sürpriz bu böyle!
Eyvah, anahtarları içeride unuttum!
Aman dikkat et, yerler çok kaygan!
İnanamıyorum, gerçekten kazandık mı?
Haydi çocuklar, sofraya gelin!
Keşke dün akşam sen de bizimle olsaydın.
Sakın bu yaptığını bir daha tekrarlama!
Ne yazık ki biletlerin hepsi tükenmiş.
Aferin sana, harika bir iş çıkardın!
Bir dakika, sanırım yanlış anladım.
Neden bu kadar geç kaldın?
Bu çantanın fiyatı ne kadar?
En yakın eczane nerede acaba?
Kaç yaşındasın ve nerede oturuyorsun?
Bana yardım edebilir misiniz?
Bu akşam sinemaya gidelim mi?
Kim bu kadar güzel resim çizdi?
Hangi otobüs hastaneye gidiyor?
Tatile ne zaman çıkıyorsunuz?
Sence hangisi daha doğru bir karar?
Sabırla koruk helva olur, dut yaprağı ipek olur.
Damlaya damlaya göl olur.
Ağaç yaşken eğilir.
Bugünün işini yarına bırakma.
Gülü seven dikenine katlanır.
Üzüm üzüme baka baka kararır.
Akıl yaşta değil baştadır.
Dost acı söyler ama doğru söyler.
Bir elin nesi var, iki elin sesi var.
Sakla samanı, gelir zamanı.
Kütüphaneden ödünç aldığım kitapları geri götürmeliyim.
Öğretmenimiz, yanlış yapmaktan korkmamamız gerektiğini söyledi.
Yağmur dinince çocuklar gökkuşağını görmek için dışarı koştu.
Uzun süredir görüşemediğimiz için konuşacak çok şeyimiz vardı.
Çalışkanlığı sayesinde kısa sürede herkesin güvenini kazandı.
Güneş batmadan önce kamp alanına ulaşmamız gerekiyordu.
Düşüncelerini açıkça söylemekten hiç çekinmezdi.
Gürültüden rahatsız olan komşular şikâyetçi oldu.
Değişikliklerin ne zaman yürürlüğe gireceği henüz belli değil.
Yorgunluğuna rağmen gülümsemeyi ihmal etmedi.
Söylediklerimi yanlış anlamış olabilirsin.
Böyle bir şeyin olabileceğini hiç düşünmemiştim.
Öğrendiklerimizi günlük hayatta kullanabilmeliyiz.
Görüşlerinizi bizimle paylaştığınız için teşekkürler.
Çocukluğumun geçtiği sokağı tanıyamadım.
Başarılı olabilmek için düzenli çalışmak şart.
Gelemeyeceğini bildirmek için aradı.
Sevdiklerinizle geçirdiğiniz zamanın kıymetini bilin.
Anlaşılan o ki bu iş düşündüğümüzden uzun sürecek.
Karşılaştığımız güçlükler bizi yıldırmadı.
Pijamalarını giyip dişlerini fırçaladı.
Fıstıklı baklava Gaziantep'in en ünlü tatlısıdır.
Vazodaki çiçekler iki günde soldu.
Hoparlörün sesini biraz kısar mısın?
Jeoloji bölümünde yüksek lisans yapıyor.
Zil çalınca öğrenciler sınıfa girdi.
Fotoğraf makinesinin pili bitmiş.
Havuzun suyu bugün oldukça soğuk.
Pencereden içeri ılık bir esinti giriyordu.
Çöpü her akşam saat sekizde çıkarıyoruz.
Ağustos böceklerinin sesi bütün gece sürdü.
Yoğurdu sarımsaklı mı istersin, sade mi?
Bağdaki üzümler olgunlaşmaya başladı.
Dağ köyünde geceler çok soğuk geçer.
Oğlum, ödevini yapmadan oyun oynamak yok.
Soğuk algınlığına ıhlamur çok iyi gelir.
Çığ tehlikesi yüzünden yol kapatıldı.
Bu sokakta sağa dönüş yasak.
Eczacı ilacın kullanım şeklini anlattı.
Hız sınırı burada saatte elli kilometre.
Bin dokuz yüz yirmi üçte cumhuriyet ilan edildi.
Bu daire yüz otuz beş metrekare.
Toplam yedi yüz kırk sekiz lira ödedim.
Maç ikiye bir bizim takımın galibiyetiyle bitti.
Sıcaklık gece eksi altı dereceye kadar düşecek.
Otuz altı sayfalık raporu bir saatte okudum.
Kardeşim on yedi yaşında, ben yirmi iki yaşındayım.
Saat üçü yirmi geçiyor, acele etmeliyiz.
Sınıfta kırk öğrenciden on dokuzu kız.
İyi geceler, yarın görüşmek üzere.
`.trim().split("\n");
