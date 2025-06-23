import { langFilter, LangPromise } from "@/dictionaries/dictionaries";

export default async function Page({params}:{params:LangPromise}) {
  const lang = langFilter((await params).lang);
  return lang === "en" ? <EnPrivacyPolicy /> : <JaPrivacyPolicy />;
}

function JaPrivacyPolicy(){
  return (
    <div className="mx-[15%] my-[3%]"
    >
      <strong className="text-xl">プライバシーポリシー</strong>
      <br />
      <br />
      <br />
      <strong>Lifeline</strong>
      <p> ～あなたの時間、あなたのタスク、あなたのコントロール～</p>
      <br />
      <p>このプライバシーポリシーは、渡邊琢資（以下「サービス提供者」といいます）が作成した、モバイルデバイス向けフリーミアムサービスであるLifelineアプリ（以下「本アプリケーション」といいます）に適用されます。本サービスは現状有姿で提供されます。</p>
      <br />
      <strong>本アプリケーションはどのような情報を取得し、どのように利用しますか？</strong>
      <p>本アプリケーションは、お客様がダウンロードおよび利用する際に、いかなる情報も取得しません。本アプリケーションの利用に登録は必要ありません。</p>
      <br />
      <strong>本アプリケーションは、デバイスの正確なリアルタイム位置情報を収集しますか？</strong>
      <p>本アプリケーションは、お客様のモバイルデバイスの正確な位置情報を収集することはありません。</p>
      <br />
      <strong>第三者は、本アプリケーションによって取得された情報を見たり、アクセスしたりできますか？</strong>
      <p>本アプリケーションはいかなる情報も収集しないため、第三者とデータが共有されることはありません。</p>
      <br />
      <strong>お客様のオプトアウトの権利は何ですか？</strong>
      <p>本アプリケーションによる情報の収集をすべて停止するには、本アプリケーションをアンインストールしてください。このアンインストールは、お客様のモバイルデバイスの一部として利用可能な標準的なアンインストールプロセスを使用するか、モバイルアプリケーションのマーケットプレイスまたはネットワークを通じて行うことができます。</p>
      <br />
      <strong>お子様について</strong>
      <p>本アプリケーションは、13歳未満のお子様から故意にデータを収集したり、マーケティングを行ったりするために使用されるものではありません。</p>
      <br />
      <p>サービス提供者は、故意にお子様から個人を特定できる情報を収集することはありません。サービス提供者は、すべてのお子様に対し、本アプリケーションおよび／またはサービスを通じて個人を特定できる情報を決して送信しないよう推奨します。サービス提供者は、親御様および法的保護者の皆様に対し、お子様のインターネット利用状況を監視し、お子様が許可なく本アプリケーションおよび／またはサービスを通じて個人を特定できる情報を提供しないよう指導することにより、本ポリシーの実施にご協力いただくようお願い申し上げます。お子様が本アプリケーションおよび／またはサービスを通じてサービス提供者に個人を特定できる情報を提供したと思われる場合は、サービス提供者（takushi.watanabe.work@gmail.com）までご連絡ください。必要な措置を講じます。また、お客様の国において個人を特定できる情報の処理に同意するためには、16歳以上である必要があります（一部の国では、親御様または保護者の方がお客様に代わって同意することが認められています）。</p>
      <br />
      <strong>セキュリティ</strong>
      <p>サービス提供者は、お客様の情報の機密性を保護することに配慮しています。しかしながら、本アプリケーションはいかなる情報も収集しないため、お客様のデータが不正な個人によってアクセスされるリスクはありません。</p>
      <br />
      <strong>変更</strong>
      <p>本プライバシーポリシーは、理由の如何を問わず、随時更新されることがあります。サービス提供者は、本プライバシーポリシーの変更について、このページを新しいプライバシーポリシーで更新することによりお客様に通知します。お客様は、変更がないか定期的に本プライバシーポリシーを確認することをお勧めします。継続して利用されることにより、すべての変更に同意したものとみなされます。</p>
      <br />
      <p>本プライバシーポリシーは2025年5月20日より有効です。</p>
      <br />
      <strong>お客様の同意</strong>
      <p>本アプリケーションを利用することにより、お客様は、現在およびサービス提供者によって修正された本プライバシーポリシーに記載されているお客様の情報の処理に同意するものとします。</p>
      <br />
      <strong>お問い合わせ</strong>
      <p>本アプリケーションの利用におけるプライバシーに関するご質問、または本ポリシーに関するご質問は、電子メール（takushi.watanabe.work@gmail.com）にてサービス提供者までご連絡ください。</p>
      <br />
      <br />
      <hr />
      <p>このプライバシーポリシーのページは<a href="[suspicious link removed]" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a>によって作成されました。</p>
    </div>
  );
}

function EnPrivacyPolicy(){
  return (
    <div className="mx-[15%] my-[3%]"
    >
      <strong className="text-xl">Privacy Policy</strong>
      <br />
      <br />
      <br />
      <strong>Lifeline</strong>
      <p> ～Your Time, Your Tasks, Your Control～</p>
      <br />
      <p>This privacy policy applies to the Lifeline app (hereby referred to as &rdquo;Application&rdquo;) for mobile devices that was created by Takushi Watanabe (hereby referred to as &rdquo;Service Provider&rdquo;) as a Freemium service. This service is intended for use &rdquo;AS IS&rdquo;.</p>
      <br />
      <strong>What information does the Application obtain and how is it used?</strong>
      <p>The Application does not obtain any information when you download and use it. Registration is not required to use the Application.</p>
      <br />
      <strong>Does the Application collect precise real time location information of the device?</strong>
      <p>This Application does not collect precise information about the location of your mobile device.</p>
      <br />
      <strong>Do third parties see and/or have access to information obtained by the Application?</strong>
      <p>Since the Application does not collect any information, no data is shared with third parties.</p>
      <br />
      <strong>What are my opt-out rights?</strong>
      <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>
      <br />
      <strong>Children</strong>
      <p>The Application is not used to knowingly solicit data from or market to children under the age of 13.</p>
      <br />
      <p>The Service Provider does not knowingly collect personally
      identifiable information from children. The Service Provider 
      encourages all children to never submit any personally
      identifiable information through the Application and/or Services.
      The Service Provider encourage parents and legal guardians to monitor 
      their children&apos;s Internet usage and to help enforce this Policy by instructing 
      their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child 
      has provided personally identifiable information to the Service Provider through the Application and/or Services, 
      please contact the Service Provider (takushi.watanabe.work@gmail.com) so that they will be able to take the necessary actions. 
      You must also be at least 16 years of age to consent to the processing 
      of your personally identifiable information in your country (in some countries we may allow your parent 
      or guardian to do so on your behalf).</p>
      <br />
      <strong>Security</strong>
      <p>The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.</p>
      <br />
      <strong>Changes</strong>
      <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
      <br />
      <p>This privacy policy is effective as of 2025-05-20</p>
      <br />
      <strong>Your Consent</strong>
      <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.</p>
      <br />
      <strong>Contact Us</strong>
      <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at takushi.watanabe.work@gmail.com.</p>
      <br />
      <br />
      <hr />
      <p>This privacy policy page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a></p>
    </div>
  );
}