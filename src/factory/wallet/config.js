/**
 * Api 
 */

let wConfig = {
  feeRate: 20,
  version: '1.0.4',
  txSetVersion: '65282',
  network: 'bitcoin',
  // network: 'testnet',
  point: 100000000,
  fees: {
    regNickname: 1,   // Register nick name
    regDelegate: 1,   // Register as an agent
    vote: 0.01        // Vote agent
  },
  terms: `
    <p class="text-center">MyLBTC服务协议</p>
    <p>尊敬的用户：</p>
    <p>感谢您选择MyLBTC服务。《MyLBTC服务协议》（以下简称“本协议”）甶MyLBTC(以下简称“MyLBTC”或“我们”）与MyLBTC 用户（以下简称“您”或“用户”）就MyLBTC服务相关事项签订的有效合约。</p>
    <p>在您使用MyLBTC (以下简称MyLBTC或“本软件”）之前，请务必认真阅读《MyLBTC服务协议》及后文提到的相关协议（特别是以粗体字标出的内容）。您下载MyLBTC软件并创建或导入钱包，即视为您已经充分阅 读并接受本协议全部条款，本协议立即生效，对双方具有约束力。</p>
    <p>本协议可由MyLBTC随时更新，经修改的协议一经在MyLBTC上公布，立即自动生效，MyLBTC不再另行通知。您继续使用MyLBTC将被视为接受修改后的协议。若您不接受修改后的条款，请立即停止使用MyLBTC。</p>
    
    <p>一.定义</p>
    <p>1. MyLBTC:指甶MyLBTC基于LBTC（LightningBitcoin）幵发的区块链钱包及辅助工具。</p>
    <p>2.用户：指具备完全民事行为能力的自然人。若您为18周岁以下的未成年人，需要在您父母或监护人的指导下使用MyLBTC。无民事行为能力人或限制民事行为能力人超过其民事权利或行为能力范围使用MyLBTC，造成的一切后果，由您及您的父母或监护人承担。</p>
    <p>3.创建或导入钱包：指您使用MyLBTC，确认履行本协议并创建或导入钱包的过程。</p>
    <p>4.钱包密码：指您在创建MyLBTC钱包过程中设置的密码，该密码用于加密保护私钥。</p>
    <p>5.私钥：由256位随机字符构成，是用户拥有并使用LBTC（LightningBitcoin）的核心。</p>
    <p>6.公钥：由私钥借助密码学原理单向推导生成，并用以生成区块链数字钱包地址，数字钱包地址即为公幵收款地址。</p>
    <p>7.助记词：符合区块链BIP39行业标准，甶随机算法生成的 12 (或15/18/21/24)个有序单词组成。是私钥的易记录表现形式，方便用户备份保管。</p>
    <p>8.Keystom:是私钥或助记词经过用户设置的钱包密码加密保存的文件形式，它只存储在您的这台移动设备中，不会同步至MyLBTC服务器。</p>
    <p>9.数字代币：指MyLBTC目前支持的数字代币种类，目前仅只支持LBTC（LightningBitcoin）。</p>

    <p>二.风险提示</p>
    <p>请您知悉，由于数字代币领域的法律法规政策尚未健全，数字代币可能会产生无法兑现、技术不稳定等重大风险。我们谨慎提醒您应当根据自身财务状况和风险偏好，理性选择持有或处置任何一种数字代币。</p>

    <p>三.服务内容</p>
    <p>1.创建或导入钱包。对MyLBTC支持的数字代币，您可以使用MyLBTC生成新钱包或导入相关区块链系统的其它钱包工具生成的兼容钱包。</p>
    <p>2.收币、发币。您可以使用MyLBTC的收币、发币功能进行数字代币的管理，实际的收币、发币行为均在相关区块链系统（而非MyLBTC）发生。对于MyLBTC服务中您可使用的日计发币限额和笔数，可能因为您使用该 转账服务时所处的国家/地区、监管要求、转账目的、MyLBTC风险控制、身份验证等事甶而不同。基于区块链操作的“不可撤销”属性，当您使用MyLBTC转账功能时，您应当自行承担因您操作失误而导致的后果（包括但不限于因您输错转账地址、您自身选择转账节点服务器的问题）。</p>
    <p>3.管理数字资产。您可以使用MyLBTC添加、保管并移除MyLBTC所支持的数字代币。</p>
    <p>4.集中托管服务。您可以选择幵通MyLBTC集中托管服务，开通此服务后，即视为您将持有的数字代币委托MyLBTC托管，并进行获取区块链节点奖励等增益活动。MyLBTC将按比例向您分配增益活动所产生的收益。需 要提请您注意的是，MyLBTC对您每年的收益不作保证，因增益服务所产生的风险均应由您个人承担。</p>
    <p>5.资讯查看。您可以使用MyLBTC查看所提供的数字代币汇率价格、涨跌幅等相关新闻资讯。MyLBTC通过抓取相应的数字代币资讯信息并展示在MyLBTC中的“资讯”版块。</p>
    <p>6.交易记录。我们将通过区块链系统拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。</p>
    <p>7.变更、暂停、限制、终止服务。在一定情况下，我们可以变更、暂停、限制或终止某位用户对MyLBTC软件的操作。当您与Cobo之间的服务关系变更、中断、终止时，您仍有权在合理时间内导出您钱包等信息。</p>
    <p>8.其他MyLBTC认为有必要提供的服务。</p>
    <p>用户接受MyLBTC提供的上述服务时应充分了解：用户应自行妥善保管移动设备、钱包密码、私钥、助记词、Keystore等信息。MyLBTC不负责为用户保管以上信息。因您遗失移动设备、主动或被动泄露、遗忘钱包密码、私钥、助记词、 Keystore或遭受他人攻击、诈骗等所引起的一切风险、责任、损失、费用应由您自行承担。</p>
    
    <p>四.您的权利义务</p>
    <p>1.创建或导入钱包。您有权在您的移动设备上通过MyLBTC创建和/或导入钱包，有权设定钱包的钱包密码等信息，并有权通过MyLBTC应用程序，使用自己的钱包在区块链上进行收币和发币等交易。</p>
    <p>2.身份验证。当MyLBTC认为您身份信息存在疑点，或您的交易行为或交易情况出现异常等需核对您身份证件或其他必要文件的情形时，您应积极配合MyLBTC完成相关的身份验证。</p>
    <p>3.遵守法律。您使用MyLBTC应当遵循有关法律法规、国家政策的要求，不得利用MyLBTC从事违法或犯罪的行为。如因您违反有关法律或者本协议之规定，使MyLBTC遭受任何损失、受到任何第三方的索赔或任何行政管理部门的处罚，您应对MyLBTC进行赔偿。</p>
    <p>4.矿工费与纳税义务。您使用MyLBTC进行发币时应支付矿工费，矿工费甶相关区块链系统收取。特定情况下，由于您所处的环境及网络状态不稳定，导致您的发币操作未完成时，亦会被相关区块链系统收取矿工费。除此之外，您因在MyLBTC进行交易而发生的所有应纳税负 及其它方面的费用均由您自行支付。</p>
    
    <p>五.免责及责任限制</p>
    <p>1. MyLBTC对以下情形不承担责任：</p>
    <p>(a)因MyLBTC系统停机维护或升级或因台风、地震、 洪水、雷电、恐怖袭击等不可抗力，以及非因MyLBTC的原因而引起的任何其它原因而导致MyLBTC无法正常提供服务；</p>
    <p>(b)因用户遗失移动设备、删除且未备份MyLBTC、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词、Keystore、不理解区块链技术的性质而导致的数字代币丢失；</p>
    <p>(c)因时间滞后、区块链系统不稳定等原因导致MyLBTC拷贝用户在区块链上的交易记录发生偏差。</p>
    <p>2.如果您从未经合法授权的第三方获取本软件或与本软件名称相同的安装程序，MyLBTC将无法保证该软件能否正常使用，也无法保证其安全性，因此造成的损失由您自行承担。</p>
    <p>3.本软件新版本发布后，旧版软件可能无法使用。MyLBTC不保证旧版软件的安全性、继续可用性及提供相应的客户服务。请您随时核对并下载最新版本。</p>

    <p>六、隐私条款</p>
    <p>MyLBTC十分重视对用户隐私的保护，相关隐私保护政策请参考MyLBTC公布并不时更新的《MyLBTC隐私权政策》。</p>

    <p>七、完整协议</p>
    <p>1 本协议甶《MyLBTC服务协议》及MyLBTC不时公布的各项规则组成。</p>
    <p>2.本协议部分内容被有管辖权的法院认定为违反或无效的，不因此影响其他内容的效力。</p>
    <p>3.本协议的任何译文版本仅为方便用户而提供，无意对本协议的条款进行修改。如果本协议的中文版本与非中文版本之间存在冲突，应以中文版本为准。</p>

    <p>八.知识产权保护</p>
    <p>MyLBTC系LBTC（LightningBitcoin）幵发并拥有知识产权的应用程序。</p>
    <p>MyLBTC中显示的任何内容（包括本协议、图片、档案、 资讯、资料、商标或标识）的知识产权归LBTC（LightningBitcoin）或第三方权利人所有。用户仅可为持有和管理数字代币之目的使用MyLBTC应用程序及其中的内容。未经LBTC（LightningBitcoin）或第三方权利人的事先书面同意，任何人不得擅自使用、修改、反向编译、复制、公幵传播、改变、散布、发行或公幵发表上述应用程序及内容。</p>
    
    <p>九.法律适用与争议解决</p>
    <p>1.本协议及其修订版之效力、解释、变更、执行与争议解决 均适用中华人民共和国法律。</p>
    <p>2.若您和MyLBTC之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，任何一方可提交MyLBTC所在地有管辖权的人民法院管辖。</p>
    
    <p>十．其他</p>
    <p>本协议自2018年10月10日起适用。</p>
    <p>本协议未尽事宜，您需遵守MyLBTC不时更新的公告及相关规则。</p>

    <br>
    <br>
    <br>

    <p class="text-center">《MyLBTC隐私政策》</p>
    <p>尊敬的用户：</p>
    <p>MyLBTC（以下简称“MyLBTC”或“我们”）尊重并保护用户（以下简称“您”或“用户”）的隐私，您使用MyLBTC时，LBTC(LightningBitcoin)将按照本隐私政策（以下简称“本政策”）收集、使用您的个人信息。</p>
    <p>MyLBTC建议您在使用本产品之前仔细阅读并理解本政策全部内容, 针对免责声明等条款在内的重要信息将以加粗的形式体现。本政策有关关键词定义与《MyLBTC服务协议》保持一致。</p>
    <p>本政策可由MyLBTC在线随时更新，更新后的政策一旦公布即代替原来的政策，如果您不接受修改后的条款，请立即停止使用MyLBTC，您继续使用MyLBTC将被视为接受修改后的政策。经修改的政策一经在MyLBTC上公布，立即自动生效。</p>
    <p>您知悉本政策及其他有关规定适用于MyLBTC及MyLBTC上LBTC(LightningBitcoin)所自主拥有的DApp。</p>

    <p>一、 我们收集您的哪些信息</p>
    <p>请您知悉，我们收集您的以下信息是出于满足您在MyLBTC服务需要的目的，且我们十分重视对您隐私的保护。在我们收集您的信息时，将严格遵守“合法、正当、必要”的原则。且您知悉，若您不提供我们服务所需的相关信息，您在MyLBTC的服务体验可能因此而受到影响。</p>
    <p>1. 我们将收集您的移动设备信息、操作记录、交易记录、钱包地址等个人信息。</p>
    <p>2. 为满足您的特定服务需求，我们将收集您的姓名、银行卡号、手机号码、邮件地址等信息。</p>
    <p>3. 您知悉：您在MyLBTC 上的钱包密码、私钥、助记词、Keystore并不存储或同步至LBTC(LightningBitcoin)服务器。LBTC(LightningBitcoin)不提供找回您的钱包密码、私钥、助记词、Keystore的服务。</p>
    <p>4. 除上述内容之外，您知悉在您使用MyLBTC特定功能时，我们将在收集您的个人信息前向您作出特别提示，要求向您收集更多的个人信息。如您选择不同意，则视为您放弃使用MyLBTC该特定功能。</p>
    <p>5. 当您跳转到第三方DApp后，第三方DApp会向您收集个人信息。MyLBTC不持有第三方DApp向您收集的个人信息。</p>
    <p>6. 在法律法规允许的范围内，LBTC(LightningBitcoin)可能会在以下情形中收集并使用您的个人信息无需征得您的授权同意：</p>
    <p>（1）与国家安全、国防安全有关的；</p>
    <p>（2）与公共安全、公共卫生、重大公共利益有关的；</p>
    <p>（3）与犯罪侦查、起诉、审判和判决执行等有关的；</p>
    <p>（4）所收集的个人信息是您自行向社会公众公开的；</p>
    <p>（5）从合法公开披露的信息中收集您的个人信息，如合法的新闻报道，政府信息公开等渠道；</p>
    <p>（6）用于维护服务的安全和合规所必需的，例如发现、处理产品和服务的故障；</p>
    <p>（7）法律法规规定的其他情形。</p>
    <p>7. 我们收集信息的方式如下：</p>
    <p>（1）您向我们提供信息。例如，您在“个人中心”页面中填写姓名、手机号码或银行卡号，或在反馈问题时提供邮件地址，或在使用我们的特定服务时，您额外向我们提供。</p>
    <p>（2）我们在您使用MyLBTC的过程中获取信息，包括您移动设备信息以及您对MyLBTC的操作记录等信息；</p>
    <p>（3）我们通过区块链系统，拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。</p>
    <p>二、 我们如何使用您的信息</p>
    <p>1. 我们通过您移动设备的唯一序列号，确认您与您的钱包的对应关系。</p>
    <p>2. 我们将向您及时发送重要通知，如软件更新、服务协议及本政策条款的变更。</p>
    <p>3. 我们通过收集您公开的钱包地址和提供的移动设备信息来处理您向我们提交的反馈。</p>
    <p>4. 我们收集您的个人信息进行LBTC(LightningBitcoin)内部审计、数据分析和研究等，以期不断提升我们的服务水平。</p>
    <p>5. 依照《MyLBTC服务协议》及LBTC(LightningBitcoin)其他有关规定，LBTC(LightningBitcoin)将利用用户信息对用户的使用行为进行管理及处理。</p>
    <p>6. 法律法规规定及与监管机构配合的要求。</p>

    <p>三、 您如何控制自己的信息</p>
    <p>您在MyLBTC中拥有以下对您个人信息自主控制权：</p>
    <p>1. 您可以通过同步钱包的方式，将您的其他钱包导入MyLBTC中，或者将您在MyLBTC的钱包导入到其他数字代币管理钱包中。MyLBTC将向您显示导入钱包的信息。</p>
    <p>2. 您知悉您可以通过“资产”版块内容修改您的数字代币种类、进行转账及收款等活动。</p>
    <p>3. 您知悉在MyLBTC“我的”的版块您可以自由选择进行如下操作：</p>
    <p>（1）在“地址簿”中，您可以随时查看并修改您的“地址簿”；</p>
    <p>（2）在“个人中心”中，您并不需要提供自己的姓名、手机号码、银行卡等信息，但当您使用特定服务时，您需要提供以上信息；</p>
    <p>4. 您知悉当我们出于特定目的向您收集信息时，我们会提前给予您通知，您有权选择拒绝。但同时您知悉，当您选择拒绝提供有关信息时，即表示您放弃使用MyLBTC的有关服务。</p>
    <p>5. 您知悉，您及我们对于您交易记录是否公开并没有控制权，因为基于区块链交易系统的开源属性，您的交易记录在整个区块链系统中公开透明。</p>
    <p>6. 您知悉当您使用MyLBTC的功能跳转至第三方DApp之后，我们的《MyLBTC服务协议》、《MyLBTC隐私政策》将不再适用，针对您在第三方DApp上对您个人信息的控制权问题，我们建议您在使用第三方DApp之前详细阅读并了解其隐私规则和有关用户服务协议等内容。</p>
    <p>7. 您有权要求我们更新、更改、删除您的有关信息。</p>
    <p>8. 您知悉我们可以根据本政策第一条第6款的要求收集您的信息而无需获得您的授权同意。</p>

    <p>四、 我们可能分享或传输您的信息</p>
    <p>1. LBTC(LightningBitcoin)在中华人民共和国境内收集和产生的用户个人信息将存储在中华人民共和国境内的服务器上。若LBTC(LightningBitcoin)确需向境外传输您的个人信息，将在事前获得您的授权，且按照有关法律法规政策的要求进行跨境数据传输，并对您的个人信息履行保密义务。</p>
    <p>2. 未经您事先同意，LBTC(LightningBitcoin)不会将您的个人信息向任何第三方共享或转让，但以下情况除外：</p>
    <p>（1）事先获得您明确的同意或授权；</p>
    <p>（2）所收集的个人信息是您自行向社会公众公开的；</p>
    <p>（3）所收集的个人信息系从合法公开披露的信息中收集，如合法的新闻报道，政府信息公开等渠道；</p>
    <p>（4）与LBTC(LightningBitcoin)的关联方共享，我们只会共享必要的用户信息，且受本隐私条款中所声明的目的的约束；</p>
    <p>（5）根据适用的法律法规、法律程序的要求、行政机关或司法机关的要求进行提供；</p>
    <p>（6）在涉及合并、收购时，如涉及到个人信息转让，LBTC(LightningBitcoin)将要求个人信息接收方继续接受本政策的约束。</p>

    <p>五、 我们如何保护您的信息</p>
    <p>1. 如LBTC(LightningBitcoin)停止运营，LBTC(LightningBitcoin)将及时停止继续收集您个人信息的活动，将停止运营的通知公告在MyLBTC上，并对所持有的您的个人信息在合理期限内进行删除或匿名化处理。</p>
    <p>2. 为了保护您的个人信息，LBTC(LightningBitcoin)将采取数据安全技术措施，提升内部合规水平，增加内部员工信息安全培训，并对相关数据设置安全访问权限等方式安全保护您的隐私信息。</p>
    <p>3. 我们将在MyLBTC“资讯”中向您发送有关信息安全的消息，并不时在MyLBTC“帮助中心”版块更新钱包使用及信息保护的资料，供您参考。</p>
    
    <p>六、 对未成年人的保护</p>
    <p>我们对保护未满18周岁的未成年人做出如下特别约定：</p>
    <p>1. 未成年人应当在父母或监护人指导下使用LBTC(LightningBitcoin)相关服务。</p>
    <p>2. 我们建议未成年人的父母和监护人应当在阅读本政策、《MyLBTC服务协议》及我们的其他有关规则的前提下，指导未成年人使用MyLBTC。</p>
    <p>3. MyLBTC将根据国家相关法律法规的规定保护未成年人的个人信息的保密性及安全性。</p>

    <p>七、 免责声明</p>
    <p>1. 请您注意，您通过MyLBTC接入第三方DApp后，将适用该第三方DApp发布的隐私政策。该第三方DApp对您个人信息的收集和使用不为LBTC(LightningBitcoin)所控制，也不受本政策的约束。LBTC(LightningBitcoin)无法保证第三方DApp一定会按照LBTC(LightningBitcoin)的要求采取个人信息保护措施。</p>
    <p>2. 您应审慎选择和使用第三方DApp，并妥善保护好您的个人信息，LBTC(LightningBitcoin)对其他第三方DApp的隐私保护不负任何责任。</p>
    <p>3. LBTC(LightningBitcoin)将在现有技术水平条件下尽可能采取合理的安全措施来保护您的个人信息，以避免信息的泄露、篡改或者毁损。LBTC(LightningBitcoin)系利用无线方式传输数据，因此，LBTC(LightningBitcoin)无法确保通过无线网络传输数据的隐私性和安全性。</p>
    
    <p>八、 其他</p>
    <p>1. 如您是中华人民共和国以外的用户，您需全面了解并遵守您所在司法辖区与使用LBTC(LightningBitcoin)服务所有相关法律、法规及规则。</p>
    <p>2. 您在使用LBTC(LightningBitcoin)服务过程中，如遇到任何有关个人信息使用的问题，您可以通过在MyLBTC提交反馈等方式联系我们。</p>
    <p>3. 您可以在MyLBTC中查看本政策及LBTC(LightningBitcoin)其他服务规则。我们鼓励您在每次访问MyLBTC时都查阅LBTC(LightningBitcoin)的服务协议及隐私政策。</p>
    <p>4. 本政策的任何译文版本仅为方便用户而提供，无意对本政策的条款进行修改。如果本政策的中文版本与非中文版本之间存在冲突，应以中文版本为准。</p>
    <p>5. 本政策自2017年9月26日起适用。</p>
    <p>本政策未尽事宜，您需遵守LBTC(LightningBitcoin)不时更新的公告及相关规则。</p>

    <p>MyLBTC</p>

    <br>
    <br>`
}

export default wConfig