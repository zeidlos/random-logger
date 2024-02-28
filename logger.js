function logger() {
  console.log("random-logger");
  console.log(
    '{"data": {"context": {},"PORT": 4003,"PATH": "/middleware","SENTRY_DSN": "https://abc@host.name/50","LOG_FORMAT": "logstash","LOG_LEVEL": "info","EXT_SYSTEM_URL": "","PROJECT_NAME": "name","K8S_NS": "foobar","SENTRY_CURRENT_ENV": "production"},"tags": {"application": "random-logger","release": "0.0.1","project_name": "random-logger","k8s_ns": "random-logger","type": "configuration"},"level": "info","message": "none"})',
  );

  console.log(
    '{"data": {"string": "echaeth9due4AicaiJie2aeshiTh4thaizohseephoo7eeQuaekeitu9feheeveebaebahjiayaevo5uoshie3eipah4eeyeud2ebugh4tuDieBiavae1naibi4och0mai1ahbuzoolapooqu0chei2ohLutoh1al3eriejoosee4weemiec3kee7aelai1juighet6aebaij1aechaikoo8ooM1Iegi7ohBoo9ho7raijohsotho8eeTh2co8lahsahL6Iey6eih9Roof7aedahshil4eiphaliek1oovee8luilaJoX7cheex7eec0ieCh0iec4aec7phanee3eene2thoo4ieTu1pahpochoor6adeef0Aidie8uamael5oongoapooph1thohlohwei7Iewail1AhBaghoh8od7Ahc7booshoophaiv9dohx7Din5ieWahf6Noque0yee5ahs2Xohniishaixohl0Zuj4saeGh7an5Thew0yoowut5phae8chiZear7oht5EiR0tagie1ebei3veefaig7iech4Ieloh3KavohFooyee1feezahXeish8thie4fu9ahth5thuiDiebucuP2yofood1quahS4ohfiec9ael2ae2oshahng8Kiqua9eng7loh0thaez5Il5EFeuf5Naekoh8aipheecokeeDiokeeleu6hei6hushaehoreigoh1EQu1IeG2toPhahMaewaitheenohee2ue6pohNeepheegh1ahkophuNgiec6Ahng0joxoo5ooje", "context": {},"PORT": 4003,"PATH": "/middleware","SENTRY_DSN": "https://abc@host.name/50","LOG_FORMAT": "logstash","LOG_LEVEL": "info","EXT_SYSTEM_URL": "","PROJECT_NAME": "name","K8S_NS": "foobar","SENTRY_CURRENT_ENV": "production"},"tags": {"application": "random-logger","release": "0.0.1","project_name": "random-logger","k8s_ns": "random-logger","type": "configuration"},"level": "info","message": "none"})',
  );
  setTimeout(logger, 5000);
}
logger();
