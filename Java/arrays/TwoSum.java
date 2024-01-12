package arrays;

import java.util.HashMap;

public class TwoSum {
	public static void main(String [] args) {
		int[] arr = {11, 3, 7, 9, 14, 2};
		int target = 17;
		int[] ans = new int[2];
		
		HashMap<Integer, Integer> map = new HashMap<>();
		for(int i=0; i < arr.length; i++) {
			int secondNo = target - arr[i];
			//Checking if the second number is present in the HashMap or not
			if(map.containsKey(secondNo)) {
				ans[0] = map.get(secondNo);
				ans[1] = arr[i];
				break;
			}
			map.put(arr[i], i);
		}
		System.out.println("["+ans[0]+"  "+ans[1]+"]");
		}
}