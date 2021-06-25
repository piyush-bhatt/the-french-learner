<template>
  <div class="outer-container">
    <h2>Numbers 31 - 60</h2>
    <div class="numbers-container">
      <div class="inner-container">
        <span><b>31</b> -> trente et un</span>
        <span><b>32</b> -> trente-deux</span>
        <span><b>33</b> -> trente-trois</span>
        <span><b>34</b> -> trente-quatre</span>
        <span><b>35</b> -> trente-cinq</span>
        <span><b>36</b> -> trente-six</span>
        <span><b>37</b> -> trente-sept</span>
        <span><b>38</b> -> trente-huit</span>
        <span><b>39</b> -> trente-neuf</span>
        <span class="tens"><b>40</b> -> quarante</span>
      </div>
      <div class="inner-container">
        <span><b>41</b> -> quarante et un</span>
        <span><b>42</b> -> quarante-deux</span>
        <span><b>43</b> -> quarante-trois</span>
        <span><b>44</b> -> quarante-quatre</span>
        <span><b>45</b> -> quarante-cinq</span>
        <span><b>46</b> -> quarante-six</span>
        <span><b>47</b> -> quarante-sept</span>
        <span><b>48</b> -> quarante-huit</span>
        <span><b>49</b> -> quarante-neuf</span>
        <span class="tens"><b>50</b> -> cinquante</span>
      </div>
      <div class="inner-container">
        <span><b>51</b> -> cinquante et un</span>
        <span><b>52</b> -> cinquante-deux</span>
        <span><b>53</b> -> cinquante-trois</span>
        <span><b>54</b> -> cinquante-quatre</span>
        <span><b>55</b> -> cinquante-cinq</span>
        <span><b>56</b> -> cinquante-six</span>
        <span><b>57</b> -> cinquante-sept</span>
        <span><b>58</b> -> cinquante-huit</span>
        <span><b>59</b> -> cinquante-neuf</span>
        <span class="tens"><b>60</b> -> soixante</span>
      </div>
    </div>
  </div>
  <Navigator prev="/numbers1" next="/numbers3" />
</template>

<script>
import Navigator from "@/components/Navigator.vue";
export default {
  name: "Numbers2",
  components: { Navigator },
};
</script>

<style scoped>
.outer-container {
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
}

h2 {
  font-size: 2.25em;
  font-family: "Homemade Apple", cursive;
}

.numbers-container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  /* height: 100%; */
  width: 100%;
  margin-bottom: 10em;
}

.inner-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 2em;
  line-height: 1.75em;
}

.tens {
  color: rgb(255, 100, 126);
}
</style>