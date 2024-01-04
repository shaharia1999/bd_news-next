// 'use client'

import BreakingNews from './component/BreakingNews';
import HomeNews from './component/HomeNews';
import Magazine from './component/Magazine';
import Sports from './component/Sports';
export default function Home() {
  return (
 <div className=" w-full">
      <BreakingNews></BreakingNews>
      <HomeNews ></HomeNews>
      <Sports></Sports>
      <Magazine></Magazine>
 </div>
  )
}
