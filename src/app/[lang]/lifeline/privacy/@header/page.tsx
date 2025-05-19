import Header from '@/components/header';
import './page.css';
import { dict, LangPromise } from '@/dictionaries/dictionaries';
import { IPageDict } from '@/interface/pageDict';

export default async function Page({params}:{params:LangPromise}) {    
      const page:IPageDict = await dict(params);
    return (
        <Header header={page.header}/>
    );
}